import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";
import PersonProfile from "./pages/PersonProfile";
import type { Person } from "./types"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState<Person[]>([]);
  const [people, setPeople] = useState(null);
  const url = "https://randomuser.me/api/?results=50";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPeople(data.results);
    };

    fetchData();
  }, []);

  if (!people) return <p>Loading...</p>;

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people}/>} />
        <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} /> 
      </Routes>
    </>
  );
}
