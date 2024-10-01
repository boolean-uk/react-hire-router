import { useState, useEffect } from 'react'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [people, setPeople] = useState([])
  const url = "https://randomuser.me/api/?results=10"
  
  
  const fetchData = async() => {
    try {
      const response = await fetch(url)
      const jsdonData = await response.json()
      console.log(jsdonData)
      setPeople(jsdonData.results)
    } catch (error) {
      console.error("Error fetching data", error)
    }
    
  }
  useEffect (() => {
    fetchData()
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to= "/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path = "/" element={<Dashboard  people = {people} hiredPeople={hiredPeople} setHiredPeople={{setHiredPeople}}/>} />
        <Route path = "/view/:uuid" element = {<PersonProfile people = {people} setHiredPeople = {setHiredPeople} hiredPeople = {hiredPeople} />} />
      </Routes>
    </>
  )
}
