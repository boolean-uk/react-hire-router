import { useEffect, useState } from 'react'
import './App.css'
import { Link, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])


  useEffect(() => {
    getPeople();
  }, [])

  function getPeople() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
  }



  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li >
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
          element={<PersonProfile people={people} setPeople={setPeople} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}
        />
        <Route
          path="/edit/:id"
          element={<PersonProfile people={people} setPeople={setPeople} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}
        />
      </Routes>
    </>
  )
}
