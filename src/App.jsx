import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        // Generate unique IDs for each person
        for (let i = 0; i < data.results.length; i++) {
          data.results[i].id = uuidv4();
        }
        setPeople(data.results);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile people={people} setHiredPeople={setHiredPeople} />
          }
        />
      </Routes>
    </>
  );
}
