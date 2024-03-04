import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom'
import "./App.css";
import DashboardPage from "./pages/Dashboard/index.jsx"
import PersonProfile from "./pages/PersonProfile/index.jsx"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  return (
    <>
      <div className="app">
        <header>
          <h1>Hire Your Team</h1>
          <nav>
            <ul>
              {/* <li>
                <Link to="/">Dashboard</Link>
              </li> */}
            </ul>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<DashboardPage people={people} setPeople={setPeople}/>} />
        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} people={people} />} />
      </Routes>
    </>
  );
}
