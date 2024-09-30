import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const BASE_URL = "https://randomuser.me/";

  useEffect(() => {
    const fetchPeople = async (numberToFetch) => {
      const response = await fetch(`${BASE_URL}api/?results=${numberToFetch}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch 50 people from randomuser: ${response.status}`);
      }
      const data = await response.json();
      setPeople(data.results);
    }
    fetchPeople(50);
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
              <li>
                <Link to="/">
                  Dashboard
                </Link>
              </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={
            <Dashboard hiredPeople={hiredPeople} people={people}/>
          }/>
          <Route path={`/view/:uuid`} element={
            <PersonProfile people={people} setHiredPeople={setHiredPeople} />
          }/>
        </Routes>
      </main>
    </>
  )
}
