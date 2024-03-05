import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Link, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

const URL = "https://randomuser.me/api/?results=50"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch(URL, {
      method: "GET"
  })
      .then((response) => response.json())
      .then((data) => {
          setPeople(data.results);
          console.log(data);
      })
      .catch((error) => console.log(error));
  }, [])

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
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} />} />
        <Route path='/view/:id' element={<PersonProfile setHiredPeople={setHiredPeople} people={people} hiredPeople={hiredPeople} />} />
      </Routes>
    </>
  )
}
