import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Profile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  console.log(people)
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      
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
        <Route path='/' element={<Dashboard
          people = {people}
          setPeople = {setPeople}
          hiredPeople = {hiredPeople}
          setHiredPeople = {setHiredPeople}
          />}/>
        {<Route path='/view/:id' element={<Profile
          people = {people}
          hiredPeople = {hiredPeople}
          setHiredPeople = {setHiredPeople}
        />}/>}
      </Routes>
    </>
  )
}
