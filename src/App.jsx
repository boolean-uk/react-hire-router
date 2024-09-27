import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import './App.css'


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(respone => respone.json())
      .then(data => {
        const peopleUpdated = data.results.map((person) => ({
          ...person,
          wage: Math.floor(Math.random() * (1000 - 100 + 1)) + 100
        }));
        setPeople(peopleUpdated)
      })
  }, [])



  console.log("Hired: ", hiredPeople)

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
          element={<Dashboard hiredPeople={hiredPeople} people={people} setPeople={setPeople}/>}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}
        />

      </Routes>
    </>
  )
}
