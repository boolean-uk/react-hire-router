import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])



  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
             <Link to="/Dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard hiredPeople={hiredPeople}/>}/>
        <Route path='/' element={<home/>}/>
      </Routes>
    </>
  )
}
