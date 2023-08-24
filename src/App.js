import { useState } from "react"
import {Route, Routes, Link, useLocation} from 'react-router-dom'
import "./styles.css"
import PeopleList from "./pages/Dashboard/components/PeopleList"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/people'>People</Link></li>
          
          </ul>
          <Routes>
            <Route 
            path='/dashboard' 
            element={<Dashboard hiredPeople={hiredPeople}/>}/>
            <Route path='/view/:id' element={<PersonProfile setHiredPeople={setHiredPeople}/>}/>

            <Route 
            path='/people' 
            element={<PeopleList/>}></Route>
                          
            
          </Routes>
        </nav>
      </header>
    </>
  )
}
