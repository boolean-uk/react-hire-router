import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import PersonProfile from './pages/PersonProfile';


export default function App() {
  const [people, setPeople] = useState("")  
  const [hiredPeople, setHiredPeople] = useState([])
  

  const url = "https://randomuser.me/api/?results=50";
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

   
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.results);
      setFilteredData(jsonData.results);
  };
  fetchData();
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Routes>
            <Route path ="/" element = { <Dashboard people = {filteredData} hiredPeople = {hiredPeople}/>} />
            <Route path ="/view/:id" element = { <PersonProfile data = {filteredData} hiredPeople = {hiredPeople} setHiredPeople={setHiredPeople}/>} />
          </Routes>
        </nav>
      </header>
    </>
  )
}
