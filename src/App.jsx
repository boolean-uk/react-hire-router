import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ViewDashboard from "./pages/Dashboard";
import ViewProfile from "./pages/Dashboard/components/Profile.jsx";
import EditPerson from "./pages/Dashboard/components/EditPerson.jsx";
import "./App.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
      .then((response) => response.json())
      .then((item) => setPeople(item.results));
  }, []);

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
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ViewDashboard
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              people={people}
              setPeople={setPeople}
            />
          }
        />
        <Route
          path="/dashboard/:id"
          element={
            <ViewProfile
              people={people}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
              setPeople={setPeople}
            />
          }
        />
        <Route
          path="/dashboard/:id/edit"
          element={
            <EditPerson
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
