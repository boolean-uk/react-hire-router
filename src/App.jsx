import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard/index';
import PersonProfile from './pages/PersonProfile/components/PersonProfile';
import './App.css';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <Router basename="/React">
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
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route
          path="/view/:id"
          element={<PersonProfile setHiredPeople={setHiredPeople} />}
        />
      </Routes>
    </Router>
  );
}