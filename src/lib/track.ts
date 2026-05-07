export function trackEvent(event: string, meta?: Record<string, string>) {
  if (window.location.hostname === "localhost") return
  if (localStorage.getItem("skip_tracking")) return
  fetch("/.netlify/functions/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, meta }),
  }).catch(() => {})
}
