
import { useEffect, useState } from 'react'
import './App.css'
import Dashbord from "./pages/Dashboard/index"
import Profile from "./pages/PersonProfile/index"

import { Route, Routes } from 'react-router-dom';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  
  useEffect(() => {
    const fetchData = () => {
      fetch("https://randomuser.me/api/?results=50")
      .then(response => response.json())
      .then(data => {
        setPeople(data.results)
      })
    }

    console.log(people)
    fetchData();
  }, []);




  return (

    <Routes>
      <Route path="/" element={<Dashbord hiredPeople={hiredPeople} people={people}/>} />
      <Route path="/view/:id" element={<Profile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} people={people}/>} />

  </Routes>
    
    

  )
}
