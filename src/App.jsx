import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>
      </header>

    <Routes>

      <Route 
        path='/dashboard'
        element={<Dashboard hiredPeople={hiredPeople} />}
      />

    </Routes>
    </>
  )
}
