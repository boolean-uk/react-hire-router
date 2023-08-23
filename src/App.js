import { useState, useEffect } from "react"
import "./styles.css"
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  
  const updateHiredPeople = (newPerson) => {
    setHiredPeople(prevHiredPeople => [...prevHiredPeople, newPerson])
  }

  useEffect(() => {
    console.log('Current hiredPeople:', hiredPeople);
  }, [hiredPeople]);
  
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Dashboard hiredPeople={hiredPeople}/>} />
        <Route path='view/:id' element={<PersonProfile addHiredPerson={updateHiredPeople}/>} />
      </Routes>
    </>
  )
}
