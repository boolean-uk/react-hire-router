/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'


export default function App() {

  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <Link to='/Dashboard'></Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Dashboard hiredPeople={hiredPeople}/>}/>
        <Route path='/HireForm' element={<PersonProfile/>}/>
      </Routes>
    </>
  )
}
