import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import PersonProfile from "./pages/PersonProfile/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setPeople(data.results);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard </Link>
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
          path="/view/:email"
          element={
            <PersonProfile
              people={people}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
            />
          }
        />
      </Routes>
    </>
  );
}
