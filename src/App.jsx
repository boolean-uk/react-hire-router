import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  function getUsers(){
    return fetch("https://randomuser.me/api/1.4/?results=50")
      .then((res) => {
        if(!res.ok) {
          throw error
        }
        return res.json()
      })
      .catch((err) => econsole.log(err))
  }

  useEffect(() => {
    getUsers()
      .then((data) => setPeople(data.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
        path="/"
        element={
          <Dashboard people={ people } hiredPeople={ hiredPeople }/>
        } />
        <Route 
        path="/view/:id"
        element={
          <PersonProfile people={ people } setPeople={ setPeople } setHiredPeople={ setHiredPeople } hiredPeople={ hiredPeople } />
          }/>
      </Routes>
    </>
  )
}
