import { useState, useEffect} from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [people, setPeople] = useState([])
  useEffect(() => {
    console.log("Fetching user...")
    for (let i = 0; i < 50; i++)
    {
      fetch("https://randomuser.me/api", {}).then((response) =>{
        return response.json();
      }).then((jsonData) => {
        if (jsonData.results[0].id.value === null) return
        people.push(jsonData.results[0])
        setPeople([...people])
      })}
    }, [])

  const hirePerson = (p) =>{
    //Als p al in de hirePerson staat moet het niet nog een keer worden toegevoegd, de wage moet wel worden veranderd
    if (hiredPeople.includes(p)) return
    hiredPeople.push(p)
    setHiredPeople([...hiredPeople])
    console.log(hiredPeople)
  }

  const firePerson = (p) =>{
    if (!hiredPeople.includes(p)) return
    hiredPeople.splice(hiredPeople.indexOf(p), 1)
    setHiredPeople([...hiredPeople])
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Routes>
            <Route path="/" element={<ul>
                                        <li>Dashboard</li>
                                        <Dashboard hiredPeople= {hiredPeople} people={people}/>
                                        </ul>} />
            <Route path="/people/:id" element={<PersonProfile people={people} hirePeople={hirePerson} firePerson = {firePerson}/>} />
          </Routes>

        </nav>
      </header>
    </>
  )
}
