import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  const navigate = useNavigate();

  const hirePerson = (person) => {
    setHiredPeople([...hiredPeople, person]);
    navigate("/"); 
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Dashboard people={people} setPeople={setPeople} hiredPeople={hiredPeople} />} 
      />
      <Route 
        path="/view/:id" 
        element={<PersonProfile people={people} onHire={hirePerson} />} 
      />
    </Routes>
  );
}
