import { useState, useEffect } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((responseData) => {
        let i = 0;
        const result = responseData.results.map((person) => ({
          ...person,
          index: i++,
        }));

        setPeople(result);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              hiredPeople={hiredPeople}
              people={people}
              setHiredPeople={setHiredPeople}
            />
          }
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={people}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
              view={true}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PersonProfile
              people={people}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
              view={false}
            />
          }
        />
      </Routes>
    </>
  );
}
