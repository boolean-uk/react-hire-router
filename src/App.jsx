import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import "./App.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
          <li><Link to="/">
              Home
            </Link></li>
          <li><Link to="/dashboard">
              Dashboard
            </Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/" element={<p>Find people to hire!</p>} />
      </Routes>
    </>
  );
}
