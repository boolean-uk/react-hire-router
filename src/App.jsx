import './App.css'

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const displayHiredPeople = (person) => {
    setHiredPeople([...hiredPeople, person])
  }

  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(response => {
        setPeople(response.results)
      })
  }, [])

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
          element={<Dashboard 
            people={people}
            hiredPeople={hiredPeople} 
          />}
        />

        <Route 
          path='/view/:id'
          element={<PersonProfile 
            people={people}
            displayHiredPeople={displayHiredPeople} 
          />}
        />
      </Routes>
    </>
  )
}