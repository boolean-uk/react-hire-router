import { useState } from "react"
import "./styles.css"
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Link to='/'>Dashboard</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
      </Routes>
    </>
  )
}
