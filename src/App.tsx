import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Terms } from "./pages/Terms"
import { Privacy } from "./pages/Privacy"
import { Subprocessors } from "./pages/Subprocessors"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/subprocessors" element={<Subprocessors />} />
      </Routes>
    </BrowserRouter>
  )
}
