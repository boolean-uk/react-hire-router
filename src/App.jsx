import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const url = "https://randomuser.me/api/?results=50"
  useEffect(()=>{
  const fetchData = async ()=> {
    const response = await fetch(url);
    const jsonData = await response.json();
    setPeople(jsonData.results)
  }

    fetchData();
  },[])


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
    
    <main>
      <Routes>
        <Route path='/' element={<Dashboard hiredPeople={hiredPeople} people={people} setHiredPeople={setHiredPeople}/>}  />
        <Route path='/view/:id' element={<PersonProfile data={people} setHiredPeople={setHiredPeople}/>}/>
      </Routes>
    </main>
    </>
  )
}
