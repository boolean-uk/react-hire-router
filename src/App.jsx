import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import PeopleList from './pages/Dashboard/components/PeopleList';
import PeopleListItem from './pages/Dashboard/components/PeopleListItem';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
        .then(response => response.json())
        .then(data => setPeople(data.results))  
        .catch(error => console.error('Error fetching data:', error));
}, []); 

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
            <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>

        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople}/>} />

        <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>

      </Routes>
    </>
  )
}
