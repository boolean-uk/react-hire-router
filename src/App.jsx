import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Link, Route, Routes } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";
import HireForm from "./pages/PersonProfile/components/HireForm";
import EditForm from "./pages/PersonProfile/components/EditForm";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard"></Link>Dashboard
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
          path="/dashboard/:id"
          element={
            <PersonProfile
              people={people}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
              setPeople={setPeople}
              person={person}
              setPerson={setPerson}
            />
          }
        />
        <Route
          path="/dashboard/:id/hire"
          element={
            <HireForm
              people={people}
              setPeople={setPeople}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
              person={person}
              setPerson={setPerson}
            />
          }
        />
        <Route
          path="/dashboard/:id/edit"
          element={
            <EditForm
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
              person={person}
              setPerson={setPerson}
            />
          }
        />
      </Routes>
    </>
  );
}
