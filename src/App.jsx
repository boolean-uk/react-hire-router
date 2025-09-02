import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import PeopleList from './pages/Dashboard/components/PeopleList'
import HireForm from './pages/PersonProfile/components/HireForm'
import './App.css'

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => setPeople(data.results))
  }, [])

  const handleHire = person => {
    if (!hiredPeople.find(p => p.login.uuid === person.login.uuid)) {
      setHiredPeople([...hiredPeople, person])
    }
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
          path="/"
          element={<PeopleList people={people} hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:id"
          element={<HireForm people={people} onHire={handleHire} />}
        />
      </Routes>
    </>
  )
}
