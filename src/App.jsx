import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.jsx";
import PersonProfile from "./pages/PersonProfile/index.jsx";
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [allPeople, setAllPeople] = useState([])

  const newHire = (person) => {
    setHiredPeople([...hiredPeople, person])
    console.log('floyden!!!', person);
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <Routes>
            <Route path="/" element={<Dashboard hiredPeople={hiredPeople} setAllPeople={setAllPeople}/>} />
            <Route path="/view/:id" element={<PersonProfile allPeople={allPeople} setHiredPeople={newHire}/>} />
          </Routes>
        </ul>
      </nav>
    </>
  );
}
