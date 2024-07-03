import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import EditForm from "./pages/PersonProfile/components/EditForm";

export default function App() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);
  const [wage, setWage] = useState(0);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  }, []);

  console.log("people", people);
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
          element={<Dashboard people={people} hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={people}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              wage={wage}
              setWage={setWage}
            />
          }
        />
        <Route
          path="/view/:id/edit"
          element={
            <EditForm
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              wage={wage}
              setWage={setWage}
            />
          }
        />
      </Routes>
    </>
  );
}
