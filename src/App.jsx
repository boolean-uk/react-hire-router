import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile';
import PeopleProvider from './context/PersonProvider';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]); // Oh... probably should have used this... Instead im adding a property to the people and sorting thereafter

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">DashBoard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <PeopleProvider>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/view/:uuid" element={<PersonProfile/>}/>
      </Routes>
      </PeopleProvider>
    </>
  )
}
