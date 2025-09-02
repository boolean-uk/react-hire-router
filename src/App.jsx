import PersonProfile from './pages/PersonProfile'

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
import Navigation from './pages/Navigation/Navigation';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const url = "https://randomuser.me/api/?results=50";
  const [people, setPeople] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setPeople(jsonData.results);
      console.log(people)
      
    };
    fetchData();
  }, []);

  

  

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Navigation />
        </nav>
      </header>

      <main>
        <Routes>
            <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
            <Route path="/person_profile" element={<PersonProfile />} />
            <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
        </Routes>
      </main>
    </>
  )
}
