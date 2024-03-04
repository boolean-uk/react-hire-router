import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import EditProfile from './pages/EditProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    console.log("Fetching users...")
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then((data) =>setPeople(data.results))
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
         <Route 
          path='/'
          element={<Dashboard hiredPeople={hiredPeople} 
            people={people}/>}
          />
          <Route
            path='view/:id'
            element={<PersonProfile setHiredPeople={setHiredPeople} 
              people={people} hiredPeople={hiredPeople}/>} 
          />
          <Route
            path='view/:id/edit'
            element={<EditProfile setHiredPeople={setHiredPeople} 
              hiredPeople={hiredPeople}/>} 
          />
      </Routes>
    </>
  )
}
