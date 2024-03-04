import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import PersonProfile from './pages/PersonProfile'
import Dashboard from './pages/Dashboard'
import PersonEdit from './pages/PersonEdit'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then(response => response.json())
      .then(setPeople)
  }, [])

  if(people.results === undefined) return <h3>Loading...</h3>

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
        path="/"
        element={<Dashboard hiredPeople={hiredPeople} people={people}/>}
      />
      <Route
        path="view/:id"
        element={<PersonProfile 
          people={people} 
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople} 
          setPeople={setPeople}
          />}
      />
      <Route
        path="view/:id/edit"
        element={
          <PersonEdit
            hiredPeople={hiredPeople}
            setHiredPeople={setHiredPeople} />
        }
        />
    </Routes>
    </>
  )
}
