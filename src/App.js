// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// use context
import { ContextStore } from "./context/useContext"

// pages
import { Home } from "./pages/Home"
import { Card } from "./pages/Card"

export default function App() {
  return (
    <ContextStore>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </ContextStore>
  );
}