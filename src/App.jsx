import './App.css'

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const hire = (person) => {
    setHiredPeople([...hiredPeople, person])
  }

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

        <Route 
          path='/view/:id'
          element={<PersonProfile hire={hire} />}
        />
      </Routes>
    </>
  )
}
