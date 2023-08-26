import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import PersonProfile from "./pages/PersonProfile/PersonProfile";
import "./styles.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <Routes>
              <Route
                path="/"
                element={<Dashboard
                  hiredPeople={hiredPeople}
                />} />

              <Route
                path="/view/:id"
                element={<PersonProfile setHiredPeople={setHiredPeople} />}
              />

            </Routes>
          </ul>
        </nav>
      </header >
    </>
  )
}
