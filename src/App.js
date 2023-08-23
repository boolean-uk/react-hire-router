import { useState, useEffect } from "react"
import "./styles.css"
import { Route, Routes, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [people, setPeople] = useState([])

  async function getPeople() {
    const responce = await fetch("https://randomuser.me/api/?results=50")
    const json = await responce.json()
    setPeople(json.results)
  }

  useEffect(() =>{
    getPeople()
  },[])

  return (
    <div className="App">
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/dashboard' >Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/dashboard" element={<Dashboard people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>

        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>
      </Routes>

    </div>
  )
}
