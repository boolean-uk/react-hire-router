import "./styles.css"
import { useState } from "react"
import { Routes, Route } from "react-router"
import { Link } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import PersonProfile from "./pages/PersonProfile"
import EditPersonProfile from "./pages/EditPersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to={'/'}> Dashboard </Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
        <Route path="/edit/:id" element={<EditPersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
      </Routes>
    </>
  )
}
