import type { Handler, HandlerEvent } from "@netlify/functions"

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) {
    return { statusCode: 204, body: "" }
  }

  const { event: eventName, meta = {} } = JSON.parse(event.body || "{}")

  const headers = event.headers
  const forwardedFor = headers["x-forwarded-for"]
  const edgeIp = forwardedFor?.split(",")[0]?.trim()
  const country = headers["x-country"] || headers["x-nf-country"]
  const city = headers["x-city"] || headers["x-nf-city"]

  const enrichedMeta: Record<string, string> = {
    ...(meta as Record<string, string>),
    ...(edgeIp ? { "🌐 Edge IP": edgeIp } : {}),
    ...(country ? { "🌍 Country": country } : {}),
    ...(city ? { "🏙️ City": city } : {}),
  }

  const metaLines = Object.entries(enrichedMeta)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n")

  const message = [`🔔 ${eventName}`, metaLines].filter(Boolean).join("\n")

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: message }),
    })
  } catch (err) {
    console.error("Failed to forward event to Discord:", err)
  }

  return { statusCode: 204, body: "" }
}
