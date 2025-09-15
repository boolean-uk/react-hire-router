/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from "./pages/Dashboard"

import PersonProfile from './pages/PersonProfile';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const url = "https://randomuser.me/api/?results=50";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
            <Routes>
              <Route path='/' element={<Dashboard people ={data} hiredPeople={hiredPeople} />} />
              <Route path="/view/:id" element={<PersonProfile people={data} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
            </Routes>
        </nav>
      </header>

      
      </>
  )
}
