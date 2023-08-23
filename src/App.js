import { useState } from "react"
import "./styles.css"
import { Routes, Route, Link } from "react-router-dom"
import PersonProfile from "./pages/PersonProfile"
import Dashboard from "./pages/Dashboard"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path= "/dashboard" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route path= "/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
      </Routes>

    </>
  )
}
