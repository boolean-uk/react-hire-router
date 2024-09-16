import { useState, useEffect, createContext } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import ViewPerson from './pages/Dashboard/components/ViewPerson'

export const hiredPeopleContext = createContext({})

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState(null)

  useEffect( () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => {
      setPeople(data.results); console.log(data.results)
    })
  }
  , [])

  return (
    <hiredPeopleContext.Provider value={{hiredPeople, setHiredPeople}}>
      <Routes>
        <Route path="/" element={<Dashboard people={people} />} />
        <Route path="view/:index" element={<ViewPerson people={people}/>} />
      </Routes>
    </hiredPeopleContext.Provider>
  )
}
