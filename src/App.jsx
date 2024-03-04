import { useEffect, useState } from "react";
import { Link, Route, Routes } from 'react-router-dom'
import "./App.css";
import DashboardPage from "./pages/Dashboard/index.jsx"
import PersonProfile from "./pages/PersonProfile/index.jsx"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      fetch(`https://randomuser.me/api/?results=5`)
        .then((response) => response.json())
        .then((data) => {
          const updatedData = data.results.map((person, index) => (
            { ...person, id: index + 1, wage: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000 }
          ));
          setPeople(updatedData);
          setDataFetched(true);
        });
    }
  }, [dataFetched]);

  return (
    <>
      <div className="app">
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
      </div>
      <Routes>
        <Route path="/" element={<DashboardPage people={people} setPeople={setPeople} hiredPeople={hiredPeople}/>} />
        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} people={people} />} />
      </Routes>
    </>
  );
}
