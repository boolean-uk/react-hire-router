import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => {
        const dataWithId = data.results.map((p, id) => {
          p.id = id
          p.wage = null
          return p
        })
        // console.log(dataWithId)
        setPeople(dataWithId)})
  }, [])

  const hirePerson = (person) => {
    if (!hiredPeople.includes(person)) {
      setHiredPeople([...hiredPeople, person])
    }
    navigate("/")
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard people={people} hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile people={people} hirePerson={hirePerson} />}
        />
        <Route
          path="/edit/:id"
          element={<PersonProfile people={people} hirePerson={hirePerson} />}
        />
      </Routes>
    </>
  )
}
