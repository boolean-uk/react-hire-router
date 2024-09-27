import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import { fetchFromURL } from "./utils/utils";

export default function App() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const randomSeed = import.meta.env.VITE_API_SEED;
  const numPeople = 50;
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  const initializeData = async () => {
    const people = await fetchFromURL(
      baseURL + `?seed=${randomSeed}&results=${numPeople}`
    );
    setPeople(people.results);
  };

  const hire = (person, wage) => {
    const updatedList = [...hiredPeople];
    person.wage = wage;
    const idx = hiredPeople.findIndex(
      (p) => p.login.uuid === person.login.uuid
    );
    idx === -1 ? updatedList.push(person) : (updatedList[idx] = person);
    setHiredPeople(updatedList);
  };

  useEffect(() => {
    initializeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <main className="content">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                people={people}
                hiredPeople={hiredPeople}
                onHire={hire}
              />
            }
          />
          <Route
            path="/view/:id"
            element={<PersonProfile people={people} onHire={hire} />}
          />
        </Routes>
      </main>
    </>
  );
}
