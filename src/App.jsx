import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';



export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const navigate = useNavigate()

function onHirePerson(person) {
      setHiredPeople([...hiredPeople, person])
      navigate('/')
}

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <main>
<Routes>
  <Route path='/' element={<Dashboard hiredPeople={hiredPeople}/>}/>
  <Route path='/view/:id' element={<PersonProfile addHiredPerson={onHirePerson}/>}/>

</Routes>
      </main>
    </>
  )
}
