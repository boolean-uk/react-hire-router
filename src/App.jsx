import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile"
import "./App.css";

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([]);
  

  useEffect(() => {
    const getPeople = async () => {
      const data = await fetch ('https://randomuser.me/api/?results=50')
      const json = await data.json()
      setPeople(json.results)
    }
   getPeople()
  }, [])

 

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
          <li><Link to="/">
              Home
            </Link></li>
          <li><Link to="/dashboard">
              Dashboard
            </Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/dashboard" element={<Dashboard hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} people={people}/>} />
        <Route path="/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} people={people}/>}/>

        <Route path="/" element={<p>Find people to hire!</p>} />
      </Routes>
    </>
  );
}
