import { useState, useEffect } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import Edit from './pages/PersonProfile/Edit'
const URL = "https://randomuser.me/api/?results=10"


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

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
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
            path="/"
            element={<Dashboard hiredPeople ={hiredPeople} people = {people}/>}
          />
          <Route path="/view/:id" element={<PersonProfile setHiredPeople={setHiredPeople} people={people} />} />
          <Route
          path="/edit/:id"
          element=
          {<Edit 
            people={people}
            hiredPeople={hiredPeople}
            setPeople={setPeople}
            setHiredPeople={setHiredPeople}
          />}
        />
      </Routes>
    </>
  )
}
