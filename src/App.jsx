import { useEffect, useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(setPeople)
  }, [])



  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/"><li>Dashboard</li></Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Dashboard people={people.results} hiredPeople={hiredPeople}/>} />
        <Route path='/view/:id' element={<PersonProfile people={people.results} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} /> 
      </Routes>
    </>
  )
}
