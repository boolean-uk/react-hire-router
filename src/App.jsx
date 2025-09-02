import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './App.css'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const url = "https://randomuser.me/api/?results=50"

  useEffect(() => {
    const fetchPeople = async () => {
      const result = await fetch(url);
      const jsonData = await result.json()
      const jsonResult = jsonData.results
      setPeople(jsonResult);
      /*console.log(jsonResult)*/
    }
    fetchPeople()
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <Routes>
          <Route path="/" element = {<Dashboard hiredPeople={hiredPeople} people={people}/>}/>
          <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>
        </Routes>
        <nav>
          <ul>
            {/*<li>Dashboard</li>*/}
          </ul>
        </nav>
      </header>
    </>
  )
}
