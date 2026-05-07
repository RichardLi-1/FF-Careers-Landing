import type { Handler, HandlerEvent } from "@netlify/functions"

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) {
    return { statusCode: 204, body: "" }
  }

  const { email } = JSON.parse(event.body || "{}")

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing email" }) }
  }

  const headers = event.headers
  const forwardedFor = headers["x-forwarded-for"]
  const edgeIp = forwardedFor?.split(",")[0]?.trim()
  const country = headers["x-country"] || headers["x-nf-country"]
  const city = headers["x-city"] || headers["x-nf-city"]

  const lines = [
    `📧 New subscriber: **${email}**`,
    edgeIp ? `🌐 Edge IP: ${edgeIp}` : "",
    country ? `🌍 Country: ${country}` : "",
    city ? `🏙️ City: ${city}` : "",
    `🕒 Time: ${new Date().toLocaleString()}`,
  ].filter(Boolean).join("\n")

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: lines }),
    })
  } catch (err) {
    console.error("Failed to send subscription to Discord:", err)
  }

  return { statusCode: 200, body: JSON.stringify({ success: true }) }
}
