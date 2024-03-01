import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import Edit from './pages/PersonProfile/Edit'

const URL = "https://randomuser.me/api/?results=50"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch(URL).then(res => res.json()).then(res => res.results).then(setPeople)
  }, [])
  
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
          element=
          {<Dashboard 
            people={people} 
            hiredPeople={hiredPeople}
          />} 
        />
        <Route 
          path="/view/:id" 
          element=
          {<PersonProfile 
            people={people} 
            hiredPeople={hiredPeople} 
            setHiredPeople={setHiredPeople}
          />} 
        />
        <Route
          path="/edit/:id"
          element=
          {<Edit 
            people={people}
            hiredPeople={hiredPeople}
            setPeople={setPeople}
            setHiredPeople={setHiredPeople}
          />}
        />
      </Routes>
    </>
  )
}
