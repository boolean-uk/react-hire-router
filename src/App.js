import { useState } from "react"
import "./styles.css"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"
import { Route, Routes, Link } from "react-router-dom"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
           <li><Link to='/'>Dashboard</Link></li>
            
              <Routes>
                <Route path="/" element={<Dashboard hiredPeople={hiredPeople}/>} />
                <Route path='/person/person.email' element={<PersonProfile/>} /> 
              </Routes>
              
              {/* couldn't pass the right path idk on what end route or link */}
            
          </ul>
        </nav>
      </header>
    </>
  )
}
