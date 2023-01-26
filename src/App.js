import { useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile/index"
import "./styles.css"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to={`/`} hiredPeople={hiredPeople}>Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path={`/view/:id`} element={<PersonProfile />} />
      </Routes>
    </>
  )
}
