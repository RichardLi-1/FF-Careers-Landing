import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { usePageViewTracker } from "../hooks/usePageViewTracker"
import { trackEvent } from "../lib/track"

const steps = [
  { label: "Organize and complete everyday tasks", image: "/step1.webp" },
  { label: "Receive candid vocation-revealing questions", image: "/step2.webp" },
  { label: "Save hundreds of hours on career experimentation", image: "/step3.webp" },
]

export function Home() {
  usePageViewTracker("/")

  const [currentStep, setCurrentStep] = useState(0)
  const [showStickyCta, setShowStickyCta] = useState(false)
  const heroCta = useRef<HTMLAnchorElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function resetInterval(fromIndex: number) {
    if (intervalRef.current) clearInterval(intervalRef.current)
    let i = (fromIndex + 1) % steps.length
    intervalRef.current = setInterval(() => {
      setCurrentStep(i)
      i = (i + 1) % steps.length
    }, 6000)
  }

  useEffect(() => {
    resetInterval(0)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  useEffect(() => {
    function onScroll() {
      if (!heroCta.current) return
      setShowStickyCta(heroCta.current.getBoundingClientRect().bottom < 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section style={{ textAlign: "center", maxWidth: 1250, margin: "0 auto", padding: "40px 30px", backgroundColor: "#0B0A2B" }}>
          <h1 style={{ fontSize: 56, fontWeight: "bold", color: "white", marginBottom: 10, fontFamily: "'Glacial Indifference', sans-serif" }}>
            The to-do list for <br /><span>career discovery</span>
          </h1>
          <p style={{ fontSize: 20, color: "#CFCFCF", marginBottom: 40, fontFamily: "'Glacial Indifference', sans-serif" }}>
            Future Forward Careers uses AI to bridge everyday <br /> productivity and vocation discovery
          </p>
          <a
            ref={heroCta}
            href="https://app.ffcareers.app/login"
            onClick={() => trackEvent("🔗 Clicked Log In (hero CTA)")}
            style={{
              display: "inline-block",
              fontSize: 20,
              padding: "16px 50px",
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
              borderRadius: 30,
              background: "linear-gradient(90deg, #A238B6, #3E348D)",
              transition: "opacity 0.3s ease",
              fontFamily: "'Glacial Indifference', sans-serif",
            }}
          >
            Log In
          </a>
        </section>

        {/* Carousel */}
        <section style={{ maxWidth: 2000, margin: "50px auto", overflow: "hidden", padding: "0 0" }}>
          <div style={{ width: "100%", height: 250, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
            <img
              src="/carousel.webp"
              alt="FF Careers app screenshot showing career matching interface"
              width={1400}
              height={250}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 15 }}
            />
          </div>
        </section>

        {/* Transition dark → white */}
        <div style={{ position: "relative", width: "100%", height: 10, backgroundColor: "white" }}>
          <div style={{
            position: "absolute",
            top: -50,
            left: 0,
            width: "100%",
            height: 100,
            backgroundColor: "#0B0A2B",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }} />
        </div>

        {/* CEC support */}
        <section style={{ backgroundColor: "#f6f6f6", textAlign: "center", padding: "80px 10px 20px" }}>
          <p style={{ fontSize: 24, color: "#666666", margin: "0 0 8px", fontWeight: "bold", fontFamily: "'Glacial Indifference', sans-serif" }}>
            Supported by
          </p>
          <img src="/cec.webp" alt="Career Education Council logo" width={160} height={60} style={{ width: 160, maxWidth: "80%", height: "auto", opacity: 0.7 }} />
        </section>

        <div style={{ backgroundColor: "white" }}>
          {/* Steps section */}
          <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", backgroundColor: "white", padding: "80px 80px", gap: 40, maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ flex: 1, minWidth: 300, maxWidth: 600 }}>
              <p style={{ fontSize: 18, color: "#333", marginBottom: 0, fontFamily: "'Glacial Indifference', sans-serif" }}>What is FF Careers?</p>
              <h2 style={{ fontSize: 50, fontWeight: "bold", marginBottom: 40, fontFamily: "'Glacial Indifference', sans-serif" }}>Not your run-of-the-mill career test.</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {steps.map((step, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: currentStep === i ? 26 : 22,
                      fontWeight: currentStep === i ? "bold" : 400,
                      borderBottom: "1px solid #ccc",
                      padding: "15px 0",
                      cursor: "pointer",
                      transition: "font-size 0.3s ease, font-weight 0.3s ease",
                      fontFamily: "'Glacial Indifference', sans-serif",
                    }}
                    onClick={() => {
                      setCurrentStep(i)
                      resetInterval(i)
                      trackEvent("🖱️ Clicked step", { step: step.label })
                    }}
                  >
                    {step.label}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                src={steps[currentStep].image}
                alt={`Step ${currentStep + 1}: ${steps[currentStep].label}`}
                width={500}
                height={500}
                style={{ width: "100%", maxWidth: 500, height: "auto", objectFit: "contain", transition: "opacity 0.5s ease-in-out" }}
              />
            </div>
          </section>

          {/* AI section — no negative margins, just normal stacked layout */}
          <section style={{ backgroundColor: "white", padding: "60px 80px 0", maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ fontSize: 50, fontWeight: "bold", marginBottom: 24, fontFamily: "'Glacial Indifference', sans-serif" }}>
              Harness the power and purpose of
            </h2>
            <img
              src="/ai.webp"
              alt="Artificial Intelligence"
              width={900}
              height={200}
              style={{ maxWidth: "100%", maxHeight: 200, display: "block" }}
            />
          </section>

          <section style={{ backgroundColor: "white", padding: "40px 80px 60px", maxWidth: 1250, margin: "0 auto" }}>
            <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 22 }}>
              Future Forward Careers uses a unique Artificial Intelligence algorithm to match you with careers based on task completion. Let AI do the work of finding your perfect career.
            </p>
          </section>

          {/* CTA section */}
          <section style={{ backgroundColor: "white", textAlign: "center", padding: "80px 20px" }}>
            <h2 style={{ fontSize: 64, fontWeight: "bold", color: "black", marginBottom: 40, fontFamily: "'Glacial Indifference', sans-serif" }}>
              Get the clearest picture of <br /> your vocation
            </h2>
            <a
              href="https://app.ffcareers.app/login"
              onClick={() => trackEvent("🔗 Clicked Try it now (bottom CTA)")}
              style={{
                display: "inline-block",
                fontSize: 24,
                fontWeight: "bold",
                padding: "20px 60px",
                color: "white",
                textDecoration: "none",
                borderRadius: 50,
                background: "linear-gradient(90deg, #F51AA9, #3E348D)",
                transition: "opacity 0.3s ease",
                fontFamily: "'Glacial Indifference', sans-serif",
              }}
            >
              Try it now
            </a>
          </section>

          {/* Subprocessors notice */}
          <div style={{ backgroundColor: "white", textAlign: "center", paddingBottom: 40 }}>
            <Link
              to="/subprocessors"
              onClick={() => trackEvent("🔗 Clicked Subprocessors (homepage)")}
              style={{ color: "#555", fontSize: 14, fontFamily: "'Glacial Indifference', sans-serif", textDecoration: "none", display: "inline-block", padding: "8px 4px" }}
            >
              View our subprocessors →
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      {/* Sticky CTA */}
      <a
        href="https://app.ffcareers.app/login"
        onClick={() => trackEvent("🔗 Clicked Log In (sticky CTA)")}
        aria-label="Log in to FF Careers"
        style={{
          position: "fixed",
          top: 20,
          right: 32,
          zIndex: 1000,
          fontSize: 16,
          padding: "12px 28px",
          fontWeight: "bold",
          color: "white",
          textDecoration: "none",
          borderRadius: 30,
          background: "linear-gradient(90deg, #A238B6, #3E348D)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
          opacity: showStickyCta ? 1 : 0,
          pointerEvents: showStickyCta ? "auto" : "none",
          transform: showStickyCta ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          fontFamily: "'Glacial Indifference', sans-serif",
        }}
      >
        Log In
      </a>
    </>
  )
}
