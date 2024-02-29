import { useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './App.css'

import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [people, setPeople] = useState([])
  const [applicants, setApplicants] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=50");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setPeople(data.results);
        setApplicants(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData()
  }, [])

  const hirePerson = (person) => {
    setHiredPeople((hiredPeople) => [...hiredPeople, person]);
    setApplicants((people) => people.filter((p) => p.login.uuid !== person.login.uuid));
  }


  if (!hiredPeople) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="dashboard-layout">
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
        <Route path="/" element={<Dashboard applicants={applicants} hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile people={people} hirePerson={hirePerson}/>} />
      </Routes>
    </div>
  );
}
