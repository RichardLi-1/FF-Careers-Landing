import { Link } from "react-router-dom"
import { trackEvent } from "../lib/track"

export function Navbar() {
  return (
    <div style={{ backgroundColor: "#05052E" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1250,
          margin: "0 auto",
          padding: "20px 40px",
          backgroundColor: "#05052E",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo.webp" alt="FF Careers Logo" width={50} height={50} style={{ width: 50, height: 50 }} />
          <span style={{ color: "white", fontSize: 24, fontWeight: "bold", fontFamily: "'Glacial Indifference', sans-serif" }}>
            FF Careers
          </span>
        </Link>
        <nav>
          <a
            href="https://app.ffcareers.app/login"
            style={{ textDecoration: "none", color: "#e0e0e0", fontSize: 20, fontFamily: "'Glacial Indifference', sans-serif" }}
            onClick={() => trackEvent("🔗 Clicked Log In (navbar)", { location: "navbar" })}
          >
            Log In
          </a>
        </nav>
      </header>
    </div>
  )
}
