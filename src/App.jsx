import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Routes, Route, Link } from "react-router-dom";
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
    .then(res => res.json())
    .then(json => {
      const data = json.results.map((item, id) => ({...item, id: id}))
      setPeople(data)
    })
      }, []);


      
  return (
    <>
    <Routes>
        <Route path='/' element={<Dashboard people={people} hiredPeople={hiredPeople} />}></Route>

        <Route path='/View/:id' element={<PersonProfile people = {people} hiredPeople = {hiredPeople} setHiredPeople={setHiredPeople}/>}></Route>
    </Routes>
    </>
  )
}
