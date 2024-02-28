import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Link } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setPeople(data.results);
        setHiredPeople([]);
        console.log(hiredPeople);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/">Dashboard</Link>
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard hiredPeople={hiredPeople} people={people} />
                }
              />

              <Route
                path="/view/:id"
                element={
                  <PersonProfile
                    people={people}
                    setHiredPeople={setHiredPeople}
                    hiredPeople={hiredPeople}
                  />
                }
              />
            </Routes>
          </ul>
        </nav>
      </header>
    </>
  );
}
