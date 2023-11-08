import { useState } from 'react'
import { Route, Routes, Link} from 'react-router-dom'
import Dashboard from './pages/Dashboard/index.jsx'
import './App.css'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path ="/dashboard" element={<Dashboard
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
        />} />
        <Route path ="/dashboard/:id" element={<PersonProfile
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
        />} />
      </Routes>
    </>
  );
}
