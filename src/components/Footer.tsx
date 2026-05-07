import { useState } from "react"
import { Link } from "react-router-dom"
import { trackEvent } from "../lib/track"

export function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      trackEvent("📧 Email subscription submitted", { email })
      setSubmitted(true)
      setEmail("")
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer style={{ backgroundColor: "#05052E", color: "white", padding: "50px 80px", fontFamily: "'Glacial Indifference', sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", maxWidth: 1200, margin: "0 auto" }}>
        {/* Left */}
        <div style={{ maxWidth: 500 }}>
          <img src="/transparent.webp" alt="Future Forward Logo" width={150} height={60} style={{ width: 150, marginBottom: 10 }} />
          <p style={{ margin: "0 0 15px" }}>Get the latest Future Forward updates</p>
          {submitted ? (
            <p style={{ color: "#a855f7", fontWeight: "bold" }}>Thanks! You're subscribed. ✓</p>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: 10, marginTop: 15 }}>
              <input
                type="email"
                placeholder="What's your email?"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: "12px",
                  border: "none",
                  borderRadius: 8,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  fontSize: 16,
                  fontFamily: "'Glacial Indifference', sans-serif",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "linear-gradient(90deg, #A238B6, #3E348D)",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: 8,
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  fontFamily: "'Glacial Indifference', sans-serif",
                }}
              >
                {loading ? "..." : "Keep updated"}
              </button>
            </form>
          )}
        </div>

        {/* Right */}
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: 8 }}><strong>Company</strong></li>
            <li style={{ marginBottom: 8 }}>
              <a
                target="_blank" rel="noreferrer"
                href="mailto:contact@futureforward.info"
                style={{ color: "white", textDecoration: "none", opacity: 0.8 }}
                onClick={() => trackEvent("🔗 Clicked Contact (footer)")}
              >
                Contact
              </a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a
                target="_blank" rel="noreferrer"
                href="https://www.instagram.com/futureforward.info"
                style={{ color: "white", textDecoration: "none", opacity: 0.8 }}
                onClick={() => trackEvent("🔗 Clicked Instagram (footer)")}
              >
                Instagram
              </a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a
                target="_blank" rel="noreferrer"
                href="https://www.linkedin.com/company/future-forward-initiative"
                style={{ color: "white", textDecoration: "none", opacity: 0.8 }}
                onClick={() => trackEvent("🔗 Clicked LinkedIn (footer)")}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom overlay */}
      <div style={{ textAlign: "center", marginTop: 40, paddingTop: 40, borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: 80, marginBottom: 20 }}>
          <img src="/greyedout.webp" alt="" aria-hidden="true" width={140} height={140} style={{ height: 140, marginRight: 20 }} className="footer-overlay-logo" />
          <div className="footer-overlay-text" style={{ fontSize: 180, fontWeight: "bold", color: "white", whiteSpace: "nowrap", opacity: 0.1, marginTop: -50 }}>
            Future Forward
          </div>
        </div>
      </div>

      {/* Legal */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 20, textAlign: "center" }}>
        <div style={{ marginBottom: 10 }}>
          <Link to="/terms" style={{ color: "white", textDecoration: "none", margin: "0 15px", opacity: 0.7, display: "inline-block", padding: "12px 4px" }}>Terms &amp; Conditions</Link>
          <Link to="/privacy" style={{ color: "white", textDecoration: "none", margin: "0 15px", opacity: 0.7, display: "inline-block", padding: "12px 4px" }}>Privacy Policy</Link>
          <Link to="/subprocessors" style={{ color: "white", textDecoration: "none", margin: "0 15px", opacity: 0.7, display: "inline-block", padding: "12px 4px" }}>Subprocessors</Link>
        </div>
        <p style={{ opacity: 0.5, fontSize: 14 }}>© Future Forward 2026. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
