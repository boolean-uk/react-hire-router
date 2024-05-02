import './App.css'

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'

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
          path='/'
          element={<Dashboard hiredPeople={hiredPeople} />}
        />
      </Routes>
    </>
  )
}
