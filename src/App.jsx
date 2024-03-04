import { useState, useEffect } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = () => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.error("Error fetching people:", error));
  };

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={"/Dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/Dashboard"
          element={<Dashboard people={people} hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:index"
          element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}
        />
      </Routes>
    </>
  );
}
