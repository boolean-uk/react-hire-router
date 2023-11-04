import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

const BASE_URL = "https://randomuser.me/api/";
const NUM_RESULTS = "results=50";

export default function App() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  function obtainApplicants() {
    fetch(`${BASE_URL}?${NUM_RESULTS}`)
      .then((response) => response.json())
      .then((result) => {
        const output = result.results.map((entry, index) => {
          entry.id.id = index + 1;
          return entry;
        });
        return setPeople(output);
      });
  }

  useEffect(obtainApplicants, []);

  return (
    <div className="container h-screen">
      <header className="grid gap-4 p-4 text-teal-500">
        <h1 className="text-6xl font-semibold">Hire Your Team</h1>
        <nav>
          <ul className="flex text-slate-50">
            <li className="rounded-lg bg-teal-500 p-2">
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={people}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
      </Routes>
    </div>
  );
}
