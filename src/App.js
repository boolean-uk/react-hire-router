import { useState, useEffect } from "react"
import "./styles.css"
import { Link, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  async function getData() {
    const response = await fetch('https://randomuser.me/api/?results=50')
    const json = await response.json()
    setPeople(json.results)
  }

  useEffect(() => {
    getData()
  }, [])

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
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} />} />

        <Route path="/view/:id" element={<PersonProfile people={people} setPeople={setPeople} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
      </Routes>
    </>
  )
}
