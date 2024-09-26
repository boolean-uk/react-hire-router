import { useState, useEffect } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [people, setPeople] = useState([])
  const apiURL = "https://randomuser.me/api/"
  const amount = 50

  useEffect(() => {
    fetch(`${apiURL}?results=${amount}`)
      .then(response => response.json())
      .then((data) => setPeople(data.results))
  }, [])

  useEffect(() => {
    console.log(hiredPeople)
  }, [hiredPeople])


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}
        />
      </Routes>
    </>
  )
}
