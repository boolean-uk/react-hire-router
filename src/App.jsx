import { useState } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

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
        <Route path="/" element={<DashBoard hiredPeople={hiredPeople} />} />
        <Route path="/View/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />

      </Routes>
  
    </>
  )
}
