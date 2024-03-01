import { useState, useEffect } from 'react'
import './App.css'
import {Routes,Route,Link,} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import Edit from './pages/PersonProfile/components/Edit.jsx'

const URL = "https://randomuser.me/api/?results=50"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const update = (updatedHiredPeople) => {
    setHiredPeople(updatedHiredPeople)
  }
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then((jsonData) => setPeople(jsonData.results))
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
             <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople ={hiredPeople} people = {people}/>}/>
        <Route path="/view/:id" element={<PersonProfile setHiredPeople={setHiredPeople} people={people} />} />
        <Route path='/edit/:id' element={<Edit people={hiredPeople} update={update}/>} />
      </Routes>
    </>
  )
}
