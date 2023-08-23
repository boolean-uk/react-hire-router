import { useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import "./styles.css"
import Dashboard from "./pages/Dashboard"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

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
        <Route path='/' element={<Dashboard hiredPeople={hiredPeople} />} />
      </Routes>
    </>
  )
}
