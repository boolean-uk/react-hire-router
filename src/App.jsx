import { useState, useEffect } from 'react'
import { Route, Routes, Link} from 'react-router-dom'
import Dashboard from './pages/Dashboard/index'
import './App.css'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
          <Link to="/dashboard">Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path ="/dashboard" element={<Dashboard/>} />
        <Route path ="/dashboard/:id" element={<PersonProfile/>} />
      </Routes>
    </>
  )
}
