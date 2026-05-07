import { useEffect, useRef } from "react"
import { trackEvent } from "../lib/track"

export function usePageViewTracker(pageName: string) {
  const hasTracked = useRef(false)

  useEffect(() => {
    if (hasTracked.current) return
    if (window.location.hostname === "localhost") return
    if (localStorage.getItem("skip_tracking")) return

    hasTracked.current = true

    const isBot = /bot|crawler|spider/i.test(navigator.userAgent)
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
    const deviceType = isMobile ? "📱 Mobile" : "🖥️ Desktop"
    const platform = /iPhone|iPad/.test(navigator.userAgent) ? "iOS"
      : /Android/.test(navigator.userAgent) ? "Android"
      : /Mac/.test(navigator.platform) ? "macOS"
      : /Win/.test(navigator.platform) ? "Windows"
      : "Unknown"

    const params = new URLSearchParams(window.location.search)
    const rawParams = params.toString()
    if (rawParams) {
      window.history.replaceState({}, "", window.location.pathname)
    }

    const eventLabel = isBot
      ? `🤖 Bot/crawler on ${pageName}`
      : `👀 New visitor on ${pageName}`

    trackEvent(eventLabel, {
      "🖥️ Device": `${deviceType} · ${platform}`,
      "🕒 Time": new Date().toLocaleString(),
      ...(rawParams ? { "🔗 Params": `?${rawParams}` } : {}),
    })
  }, [pageName])
}
