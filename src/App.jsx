import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      Browser
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Dashboard'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
      <Route path='/Dashboard' element={<Dashboard hiredPeople={hiredPeople}/>}/>
      <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>
      <Route path='/' element={<home/>}/>
      </Routes>
    </>
  )
}
