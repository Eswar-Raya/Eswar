type EventPayload = Record<string, string | number | boolean>;

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
};

const STORAGE_KEY = "eswar_portfolio_events";
const MAX_EVENTS = 120;

export function trackEvent(eventName: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  const event = {
    event: eventName,
    ...payload,
    ts: Date.now(),
  };

  const w = window as AnalyticsWindow;
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push(event);
  }

  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, payload);
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const current = raw ? (JSON.parse(raw) as Array<Record<string, unknown>>) : [];
    current.push(event);
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(current.slice(-MAX_EVENTS)),
    );
  } catch {
    // ignore storage failures
  }
}
