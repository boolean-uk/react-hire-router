/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react'
import Dashboard from "./pages/Dashboard";
import PersonProfile from './pages/PersonProfile';
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/?results=50');
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
          <ul >
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople}/>} />
        <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
      </Routes>
    </>
  )
}
