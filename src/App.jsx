import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const url = "https://randomuser.me/api/?results=50";

  useEffect(() => {
    const fetchdata = async () => {
      console.log("Getting 50 people");
      const response = await fetch(url)
      const jsonData = await response.json();
      setPeople(jsonData.results)
    };
    fetchdata();
  }, [])

  function setHired(person) {
    if(hiredPeople.includes(person)){
      return
    }
    setHiredPeople([...hiredPeople, person])
    const newPeople = people.filter((p) => p !== person)
    setPeople(newPeople)
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/"> Dashboard </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople}/>}/>
          <Route path="/view/:id" element={<PersonProfile people={people.concat(hiredPeople)} setHired={setHired} />}/>
        </Routes>
      </header>
    </>
  )
}
