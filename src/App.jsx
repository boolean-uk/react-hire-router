import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import "./App.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  const hiredPersonsList = (personData) => {
    setHiredPeople((hiredPeople) => [...hiredPeople, personData.person]);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
  }, []);
  return (
    <>
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
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={hiredPeople}
              hiredPersonsList={hiredPersonsList}
            />
          }
        />
      </Routes>
    </>
  );
}
