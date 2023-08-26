import { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import PersonProfile from "./pages/PersonProfile/PersonProfile";
import "./styles.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [people, setPeople] = useState([])

  useEffect(() => {
    const getData = async () => {

      const res = await fetch('https://randomuser.me/api/?page=3&results=50&seed=abc');
      const data = await res.json();
      setPeople(data.results);
    };

    getData();
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <Routes>
              <Route
                path="/"
                element={<Dashboard
                people={people}
                  hiredPeople={hiredPeople}
                />} />

              <Route
                path="/view/:id"
                element={<PersonProfile setHiredPeople={setHiredPeople} />}
              />

            </Routes>
          </ul>
        </nav>
      </header >
    </>
  )
}
