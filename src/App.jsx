import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  

  return (
    <>
    Browser
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
    </>
  )
}
