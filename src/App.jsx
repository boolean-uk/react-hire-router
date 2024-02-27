/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'


export default function App() {

  const [hiredPeople, setHiredPeople] = useState([])
  const [allPeople, setPeople] = useState([])

  const getPeople = () => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => setPeople(data.results))
  }
  useEffect(getPeople, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path='/'
          element={<Dashboard
            hiredPeople={hiredPeople}
            allPeople={allPeople} />}
        />
        <Route
          path='/PersonProfile/view/:id'
          element={<PersonProfile
            setHiredPeople={setHiredPeople}
            hiredPeople={hiredPeople} />}
        />
      </Routes>
    </>
  )
}