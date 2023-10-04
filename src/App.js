import { useState } from "react";
import "./styles.css";
import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PeopleList from "./pages/Dashboard/components/PeopleList";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile setHiredPeople={setHiredPeople} />}
        />
        <Route path="/people" element={<PeopleList />} />
      </Routes>
    </div>
  );
}
