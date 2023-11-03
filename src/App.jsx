import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

// link created to return to dashboard when clicked
// routes created below to render the respective component when the 'path' matches the url

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
      <Routes>
        <Route
          path="/"
          element={ <Dashboard hiredPeople={hiredPeople} />} />
        <Route
          path="/view/:id"
          element={ <PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} /> } />
      </Routes>
    </>
  )
}
