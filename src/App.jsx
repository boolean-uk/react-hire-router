import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
    .then(res => res.json())
    .then((data) =>{
      setPeople(data.results)
    })
  },[])

  const handleHiring = (newPerson, wage) =>{
    setHiredPeople(prev => [...prev, { ...newPerson, wage: wage }])
  }
  useEffect(() => {
    console.log(hiredPeople)
  }, [hiredPeople])

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
        <Route path='/' element={<Dashboard people={people} hiredPeople={hiredPeople}/>}/>
        <Route path='/view/:id' element={<PersonProfile people={people} handler={handleHiring}/>}/>
      </Routes>
    </>
  )
}
