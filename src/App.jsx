import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/index.jsx";
import PersonProfile from "./pages/PersonProfile/index.jsx";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    console.log(
      "Running my effect once, note: dependency array contains []..."
    );
    fetch(`https://randomuser.me/api/?inc=name&results=50`)
      .then((response) => response.json())
      .then((data) => {
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
          element={<Dashboard people={people} hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={people}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
              setPeople={setPeople}
            />
          }
        />
      </Routes>
    </>
  );
}
