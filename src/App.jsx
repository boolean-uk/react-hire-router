import { useState } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li className='dashboard'>
              <Link to={"/"}>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Setting up routes references: */}
      <Routes>
        {/* 1. Dashboard: */}
        <Route 
          path='/'
          element={<Dashboard hiredPeople={hiredPeople}/>}
        />
        {/* 2. PersonProfile: */}
        <Route 
          path='/view/:id'
          element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}
        />
      </Routes>
    </>
  )
}

