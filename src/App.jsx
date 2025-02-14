import {useEffect, useState} from 'react'
import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.jsx";
import PersonProfile from "./pages/PersonProfile/index.jsx";
import {getPeople} from "./services/people.js";

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  useEffect(() => {
    getPeople().then((response) => { setPeople(response.results) })
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to={"/"}>
              <li>Dashboard</li>
            </Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} people={people} setPeople={setPeople}/>}/>
        <Route path="view/:id" element={<PersonProfile people={people} setPeople={setPeople}/>} />
      </Routes>
    </>
  )
}
