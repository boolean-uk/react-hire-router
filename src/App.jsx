import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(json => {
      const data = json.results.map((item, index) => ({...item, index: index + 1}))
      setPeople(data)
    })
  }, [])
  
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>
      </header>

    <Routes>

      <Route 
        path='/dashboard'
        element={<Dashboard hiredPeople={hiredPeople} people={people}/>}
      />

      <Route 
        path='/view/:index'
        element={<PersonProfile people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>}
      />

    </Routes>
    </>
  )
}
