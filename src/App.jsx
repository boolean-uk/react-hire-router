import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
          path="/" 
          element={<Dashboard/>}
        />
        <Route 
          path="/view/:name"
          element={<PersonProfile />}/>
      </Routes>
    </>
  )
}
