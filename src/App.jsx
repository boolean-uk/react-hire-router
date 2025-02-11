import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

function App() {
  const [users, setUsers] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  const hirePerson = (person, wage) => {
    setHiredPeople([...hiredPeople, { ...person, wage }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard users={users} hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile users={users} hirePerson={hirePerson} />} />
      </Routes>
    </Router>
  );
}

export default App;

