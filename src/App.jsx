import { useState, useEffect } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import './App.css';

export default function App() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);
  const navigate = useNavigate();

  function navigateToDashboard() {
    navigate('/dashboard');
  }
  

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50", {
      method: "GET"
    })
    .then((response) => response.json())
      .then((data) => {
        const result = data.results.map((person, index) => ({
          ...person,
          id: index + 1,
          hired: false
        }));
        setPeople(result);
        console.log(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/dashboard/*"
          element={<Dashboard people = {people} hiredPeople = {hiredPeople}/>}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile people = {people} setPeople = {setPeople} hiredPeople = {hiredPeople} setHiredPeople = {setHiredPeople} navigateToDashboard={navigateToDashboard}/>}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
