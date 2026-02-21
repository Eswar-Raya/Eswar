import os
from pathlib import Path

import chromadb
from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv

from llama_index.core import Settings, SimpleDirectoryReader, StorageContext
from llama_index.core.indices.vector_store import VectorStoreIndex
from llama_index.embeddings.ollama import OllamaEmbedding
from llama_index.llms.ollama import Ollama
from llama_index.vector_stores.chroma import ChromaVectorStore

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"

load_dotenv(BASE_DIR / ".env")

MAX_CHAT_CHARS = int(os.getenv("CHAT_MAX_CHARS", "2000"))
ENVIRONMENT = os.getenv("ENVIRONMENT", "development").strip().lower()
INGEST_TOKEN = os.getenv("INGEST_TOKEN", "").strip()


def parse_allowed_origins(raw_origins: str | None) -> list[str]:
    if not raw_origins:
        return ["http://localhost:3000"]

    allowed = [origin.strip() for origin in raw_origins.split(",") if origin.strip()]
    return allowed or ["http://localhost:3000"]


ALLOWED_ORIGINS = parse_allowed_origins(os.getenv("ALLOWED_ORIGINS"))


class ChatRequest(BaseModel):
    question: str = Field(..., min_length=1, max_length=MAX_CHAT_CHARS)


class ChatResponse(BaseModel):
    answer: str


app = FastAPI(title="Eswar Portfolio Assistant")
index: VectorStoreIndex | None = None

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def build_index() -> VectorStoreIndex:
    embed_model_name = os.getenv("EMBED_MODEL", "nomic-embed-text")
    llm_model_name = os.getenv("LLM_MODEL", "llama3.1")

    Settings.embed_model = OllamaEmbedding(model_name=embed_model_name)
    Settings.llm = Ollama(model=llm_model_name, request_timeout=120.0)

    documents = SimpleDirectoryReader(str(DATA_DIR)).load_data()
    if not documents:
        raise RuntimeError("No documents found in backend/data.")

    chroma_client = chromadb.PersistentClient(path=str(BASE_DIR / "chroma"))
    chroma_collection = chroma_client.get_or_create_collection("portfolio")
    vector_store = ChromaVectorStore(chroma_collection=chroma_collection)
    storage_context = StorageContext.from_defaults(vector_store=vector_store)

    return VectorStoreIndex.from_documents(
        documents,
        storage_context=storage_context,
        show_progress=True,
    )


@app.on_event("startup")
def on_startup() -> None:
    global index
    index = build_index()


@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
    if not index:
        raise HTTPException(status_code=503, detail="Index not ready.")

    question = request.question.strip()
    if not question:
        raise HTTPException(status_code=400, detail="Question is required.")
    if len(question) > MAX_CHAT_CHARS:
        raise HTTPException(status_code=400, detail="Question is too long.")

    query_engine = index.as_query_engine(similarity_top_k=4)
    response = query_engine.query(question)
    return ChatResponse(answer=str(response))


@app.post("/ingest")
def ingest(x_ingest_token: str | None = Header(default=None)) -> dict:
    global index

    # In production, ingest should be explicitly token-gated.
    if ENVIRONMENT == "production" and not INGEST_TOKEN:
        raise HTTPException(status_code=503, detail="Ingest endpoint disabled.")
    if INGEST_TOKEN and x_ingest_token != INGEST_TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized.")

    index = build_index()
    return {"status": "ok"}
