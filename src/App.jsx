import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import { Link } from 'react-router-dom'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  console.log('all people hired so far:',hiredPeople)

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
          element={<Dashboard hiredPeople={hiredPeople}/>}
        />
        <Route 
          path="/view/:name"
          element={<PersonProfile
            hiredPeople={hiredPeople}
            setHiredPeople={setHiredPeople} 
          />}
        />
      </Routes>
    </>
  )
}
