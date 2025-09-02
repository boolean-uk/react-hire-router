import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import PersonProfile from './pages/PersonProfile/PersonProfile'
import Home from './pages/Home'

export default function App() {

  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const url = "https://randomuser.me/api/?results=50"

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setPeople(jsonData.results)
    }
    fetchData()
  }, [])

  return (
    <>
      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
          <Route path="/personProfile/:id" element={<PersonProfile people={people} setHiredPeople={setHiredPeople}/>} />
        </Routes>
      </main>
    </>
  )
}

