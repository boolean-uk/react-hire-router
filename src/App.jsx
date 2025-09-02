import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const usersURL = "https://randomuser.me/api/?results=50";
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(usersURL);
      const jsonData = await response.json();
      setPeople(jsonData);
    };
    fetchData();
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
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people}/> }></Route>
        <Route path="/view/:id" element={<PersonProfile people={people} 
                                                        hiredPeople={hiredPeople} 
                                                        setHiredPeople={setHiredPeople}
                                                        />}></Route>
      </Routes>
    </>
  )
}
