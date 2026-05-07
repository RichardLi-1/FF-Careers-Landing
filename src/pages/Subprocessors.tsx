import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { usePageViewTracker } from "../hooks/usePageViewTracker"

const subprocessors = [
  { name: "AWS (via Docker)", purpose: "Cloud infrastructure and database hosting", location: "United States", notes: "All stored data is encrypted at rest using pgcrypto", url: "https://aws.amazon.com" },
  { name: "Pinecone", purpose: "Vector database and semantic search", location: "United States", notes: "Only receives numerical embeddings — no raw user content", url: "https://pinecone.io" },
  { name: "Hugging Face", purpose: "AI embedding model inference", location: "United States", notes: "Used to generate embeddings for task recommendations", url: "https://huggingface.co" },
  { name: "Firebase (Google)", purpose: "Authentication and user identity", location: "United States", notes: "Handles user sign-in and session management", url: "https://firebase.google.com" },
  { name: "Railway", purpose: "Backend hosting and deployment", location: "United States", notes: "Hosts the application backend and API", url: "https://railway.app" },
]

export function Subprocessors() {
  usePageViewTracker("/subprocessors")

  return (
    <>
      <Navbar />

      <section style={{ textAlign: "center", maxWidth: 1250, margin: "0 auto", padding: "40px 30px", backgroundColor: "#0B0A2B" }}>
        <h1 style={{ fontSize: 56, fontWeight: "bold", color: "white", fontFamily: "'Glacial Indifference', sans-serif" }}>Subprocessors</h1>
      </section>

      <div style={{ position: "relative", width: "100%", height: 10, backgroundColor: "white" }}>
        <div style={{ position: "absolute", top: -50, left: 0, width: "100%", height: 100, backgroundColor: "#0B0A2B", borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} />
      </div>

      <br /><br /><br /><br /><br />

      <div style={{ backgroundColor: "white", display: "flex", justifyContent: "center" }}>
        <section style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 18, lineHeight: 1.6, color: "#333", backgroundColor: "white", padding: "0 20px", maxWidth: 1250, width: "100%" }}>
          <p style={{ color: "#999", fontSize: "0.85rem", marginBottom: "2rem" }}>Current as of January 3, 2025</p>
          <p style={{ color: "#555", fontSize: "1rem", marginBottom: "0.5rem", lineHeight: 1.6 }}>
            Know exactly where your data is and how it is being used. Below are FF Careers' subprocessors — third-party services that may process data on our behalf.
          </p>

          <div style={{ overflowX: "auto", marginTop: "2rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr>
                  {["Name", "Purpose", "Location", "Notes", "Website"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "0.6rem 1rem", color: "#888", fontWeight: "bold", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "1px solid #e0e0e0" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {subprocessors.map(sp => (
                  <tr key={sp.name}>
                    <td style={{ padding: "1rem", borderBottom: "1px solid #f0f0f0", fontWeight: "bold", color: "#111", whiteSpace: "nowrap" }}>{sp.name}</td>
                    <td style={{ padding: "1rem", borderBottom: "1px solid #f0f0f0", color: "#333" }}>{sp.purpose}</td>
                    <td style={{ padding: "1rem", borderBottom: "1px solid #f0f0f0", color: "#333" }}>{sp.location}</td>
                    <td style={{ padding: "1rem", borderBottom: "1px solid #f0f0f0", color: "#333" }}>{sp.notes}</td>
                    <td style={{ padding: "1rem", borderBottom: "1px solid #f0f0f0" }}>
                      <a href={sp.url} target="_blank" rel="noopener noreferrer" style={{ color: "#1a73e8", textDecoration: "none" }}>{sp.url}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
