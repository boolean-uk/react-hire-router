import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <>
      <header className="bg-gradient-to-r from-slate-400 to-slate-700 py-3 text-center">
        <h1 className="text-2xl text-gray-800">Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className="text-xl text-white">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}
