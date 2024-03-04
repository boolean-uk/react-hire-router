import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Route, Routes, Link, Router } from 'react-router-dom';
import PersonProfile from './pages/PersonProfile';


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])


  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
      .then(res => res.json())
      .then(data => {
        const peopleData = data.results;
        setPeople(peopleData);
      })
  }, []);

  useEffect(() => 
  {console.log(people)}, [people])

  useEffect(() => 
  {console.log(hiredPeople)}, [hiredPeople])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
          <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard people={people} hiredPeople={hiredPeople} />}
        />
        <Route path='/view/:id' element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>
      </Routes>
    </>
  )
}
