import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
