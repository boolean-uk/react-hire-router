import { useState, useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const [edit, setEdit] = useState(false)
  const url = "https://randomuser.me/api/?results=50&seed=abc";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      let id = 1;
      for(const p in jsonData.results)
      {
        jsonData.results[p].id = id
        id += 1;
      }
      setPeople(jsonData.results);
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
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} setEdit={setEdit} />} />
        <Route path="/view/:id" element={ <PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} edit={edit} setEdit={setEdit}/>}/>
      </Routes>
    </>
  )
}
