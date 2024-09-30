import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import "./App.css";

export default function App() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((body) => setPeople(body.results));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              people={people}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
        <Route
          path="/view/:personUuid"
          element={
            <PersonProfile
              people={people}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
      </Routes>
    </div>
  );
}
