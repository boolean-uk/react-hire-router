import { useState } from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/index";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

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
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} />}
        ></Route>
        <Route
        path="/view/:id"
        element={<PersonProfile />}
        ></Route>
      </Routes>
    </>
  );
}
