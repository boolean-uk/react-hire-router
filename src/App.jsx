import { useState, useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import ProfileEdit from './pages/PersonProfile/ProfileEdit';


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api?results=50");
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();
        console.log("Fetching completed")
        setPeople(jsonData.results);
      } catch (error) {console.error("Fetch error:", error);}
    }    
    fetchData();
  }, [])


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
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} />} />
        <Route path="view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
        <Route path="view/:id/edit" element={<ProfileEdit people={people} setPeople={setPeople} />} />
      </Routes>
    </>
  )
}
