import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        console.log(x.results);

        setPeople(x.results);
      });
  }, []);
  console.log(people);

  return (
    <>
      <header>
        <Link to="/">Dashboard</Link>
        <h1>Hire Your Team</h1>
        <nav>
          <Routes>
            <Route
              path="/"
              element={<Dashboard hired={hiredPeople} people={people} />}
            />
            <Route
              path="/view/:id"
              element={
                <PersonProfile
                  people={people}
                  hiredPeople={hiredPeople}
                  setHiredPeople={setHiredPeople}
                ></PersonProfile>
              }
            />
          </Routes>
        </nav>
      </header>
    </>
  );
}
