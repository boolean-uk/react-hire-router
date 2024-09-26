import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";
import Dashboard from "./pages/Dashboard";
import EditWage from "./pages/EditWage/EditWage";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [peopleResults, setPeopleResults] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")  
      .then((response) => response.json())
      .then(setPeopleResults)
      .then(() => {
        setPeople(peopleResults.results)
      })
  }, []);

  useEffect(() => {
    if (peopleResults) {
        setPeople(peopleResults.results)
      }
  }, [peopleResults]);



  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
          <ul>
            <Link to="/">Home</Link> 
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/edit/:id" element={<EditWage people={people} setPeople={setPeople} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/> } /> 
        <Route path="/view/:id" element={<PersonProfile people={people} setPeople={setPeople} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/> } />
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} /> } />
      </Routes>
    </>
  );
}
