import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import EditProfile from "./pages/EditProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/">Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              people={people}
              setPeople={setPeople}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
        <Route
          path="people/:id/edit"
          element={
            <EditProfile
              people={people}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              setPeople={setPeople}
            />
          }
        />
        <Route
          path="view/:id"
          element={
            <PersonProfile
              people={people}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              setPeople={setPeople}
              isHiredList={false}
            />
          }
        />
        <Route
          path="hired/:id"
          element={
            <PersonProfile
              people={hiredPeople}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              setPeople={setPeople}
              isHiredList={true}
            />
          }
        />
      </Routes>
    </>
  );
}
