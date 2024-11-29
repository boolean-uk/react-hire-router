import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [users, setUsers] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  useEffect(() =>{
    fetch("https://randomuser.me/api/?results=50",{
      method:'GET'
    })
    .then(resposne => resposne.json())
    .then((data) =>(setUsers(data.results)))    
  }, []) 

  console.log("hired: ")
  console.log(hiredPeople)
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
        <Route path='/' element={<Dashboard hiredPeople={hiredPeople} users={users}/>}/>    
        <Route path="/view/:id" element={<PersonProfile users={users} hirePerson={setHiredPeople} hiredPeople={hiredPeople}/>}/>    
      </Routes>
    </>
  )
}