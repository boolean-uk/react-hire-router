import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((json) => {
        setPeople(json.results);
      });
  }, []);

  let filteredPeople = people.filter((person) => !person.wage);

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
          element={
            <Dashboard hiredPeople={hiredPeople} people={filteredPeople} />
          }
        />
        {/* <Route
          path="/view/:id"
          element={<HireForm setHiredPeople={setHiredPeople} people={people} />}
        /> */}
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
