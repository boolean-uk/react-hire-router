import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard/index'
import PersonProfile from './pages/PersonProfile/index'

export default function App() {
  const url = "https://randomuser.me/api/?results=50";
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(url);
          const jsonData = await response.json();
          setPeople(jsonData.results);
      };
      fetchData();
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
        <Routes>
          <Route path="/" element={<Dashboard people={people} setPeople={setPeople} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
          <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
        </Routes>
      </header>
    </>
  )
}
