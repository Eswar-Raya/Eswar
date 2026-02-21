export type LogoKey =
  | "tata"
  | "huawei"
  | "ericsson"
  | "adecco"
  | "dxc"
  | "stevens"
  | "aditya"
  | "savvy"
  | "atandt"
  | "workforce-resilience"
  | "astro"
  | "downer"
  | "directv"
  | "confidential";

export type LogoDefinition = {
  key: LogoKey;
  name: string;
  kind: "company" | "college" | "program";
  accent: string;
  surface: string;
};

export const logoMap: Record<LogoKey, LogoDefinition> = {
  tata: {
    key: "tata",
    name: "Tata",
    kind: "company",
    accent: "#5f97ff",
    surface: "rgba(95, 151, 255, 0.18)",
  },
  huawei: {
    key: "huawei",
    name: "Huawei",
    kind: "company",
    accent: "#ff7d62",
    surface: "rgba(255, 125, 98, 0.18)",
  },
  ericsson: {
    key: "ericsson",
    name: "Ericsson",
    kind: "company",
    accent: "#44c8ad",
    surface: "rgba(68, 200, 173, 0.18)",
  },
  adecco: {
    key: "adecco",
    name: "Adecco",
    kind: "company",
    accent: "#f6b74e",
    surface: "rgba(246, 183, 78, 0.18)",
  },
  dxc: {
    key: "dxc",
    name: "DXC Technology",
    kind: "company",
    accent: "#8e9eff",
    surface: "rgba(142, 158, 255, 0.2)",
  },
  stevens: {
    key: "stevens",
    name: "Stevens Institute of Technology",
    kind: "college",
    accent: "#84b6ff",
    surface: "rgba(132, 182, 255, 0.18)",
  },
  aditya: {
    key: "aditya",
    name: "Aditya Engineering College, JNTUK",
    kind: "college",
    accent: "#7ac7d1",
    surface: "rgba(122, 199, 209, 0.18)",
  },
  savvy: {
    key: "savvy",
    name: "Savvy Global Technologies",
    kind: "company",
    accent: "#be9dff",
    surface: "rgba(190, 157, 255, 0.2)",
  },
  atandt: {
    key: "atandt",
    name: "AT&T Program",
    kind: "program",
    accent: "#7cb0ff",
    surface: "rgba(124, 176, 255, 0.18)",
  },
  "workforce-resilience": {
    key: "workforce-resilience",
    name: "Workforce Resilience Program",
    kind: "program",
    accent: "#6fd4b5",
    surface: "rgba(111, 212, 181, 0.18)",
  },
  astro: {
    key: "astro",
    name: "Astro Program",
    kind: "program",
    accent: "#9fb0ff",
    surface: "rgba(159, 176, 255, 0.18)",
  },
  downer: {
    key: "downer",
    name: "Downer Program",
    kind: "program",
    accent: "#77c2ff",
    surface: "rgba(119, 194, 255, 0.18)",
  },
  directv: {
    key: "directv",
    name: "DirecTV Program",
    kind: "program",
    accent: "#6db8ea",
    surface: "rgba(109, 184, 234, 0.18)",
  },
  confidential: {
    key: "confidential",
    name: "Client (confidential)",
    kind: "program",
    accent: "#97a7c3",
    surface: "rgba(151, 167, 195, 0.18)",
  },
};
