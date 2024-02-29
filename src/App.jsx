import { useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/">Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/view/:id"
          element={<PersonProfile setPeople={setPeople} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} people={people} />}
        />
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} />} />
      </Routes>
    </>
  )
}
