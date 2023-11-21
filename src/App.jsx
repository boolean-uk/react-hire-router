import { useState, useEffect } from "react"
import "./App.css"
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import PersonProfileEdit from "./pages/PersonProfile/components/ProfileEdit"

import { Routes, Route, Link } from 'react-router-dom'
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(data => setPeople(data.results))
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={
          <Dashboard
            people={people}
            hiredPeople={hiredPeople}
          />}
        />
        <Route path='/people/:id' element={
          <PersonProfile
            setHiredPeople={setHiredPeople}
            hiredPeople={hiredPeople}
          />}
        />
        <Route path='/people/:id/edit' element={
          <PersonProfileEdit
            setHiredPeople={setHiredPeople}
            hiredPeople={hiredPeople}
          />}
        />
      </Routes>
    </>
  )
}