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
           <li><Link to='/Dashboard'>Dashboard</Link></li>
            
              <Routes>
                <Route path="/Dashboard" element={<Dashboard hiredPeople={hiredPeople}/>} />
                <Route path='/view/:id' element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} /> 
              </Routes>
                          
          </ul>
        </nav>
      </header>
    </>
  )
}
