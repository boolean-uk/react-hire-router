
import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  
  const getPeople = async () => {
    const response = await fetch(`https://randomuser.me/api?results=50`);
    const data = await response.json()
    setPeople(data.results)
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/Dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard people={people} hiredPeople={hiredPeople}/>}
        />
        <Route 
          path="/profile/:id"
          element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}
        />
      </Routes>
    </>
  )
}
