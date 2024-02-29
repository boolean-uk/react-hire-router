import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.jsx";
import "./App.css";
import PersonProfile from "./pages/PersonProfile/index.jsx";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    console.log("Fetching applicants...");
    fetch(`https://randomuser.me/api/?results=50`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setPeople(jsonData.results);
        console.log(jsonData.results);
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
        <Route path="/view/:id" element={<PersonProfile people={people} />} />
      </Routes>
    </>
  );
}
