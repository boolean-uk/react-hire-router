import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile';
import EditPerson from './pages/EditPerson';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [people, setPeople] = useState([])

  //get people from api
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((result) => setPeople(result.results))
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people}/>} />
        <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} /> //
        <Route path='/view/:id/edit' element={<EditPerson hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>
      </Routes>
    </>
  )
}
