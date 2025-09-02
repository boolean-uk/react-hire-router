import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import { useState } from "react";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const handleAddPeople = (p) => {
    let res = hiredPeople.find((o) => o.login.uuid == o.login.uuid);

    if (res) {
      res.wage = p.wage;
    } else {
      setHiredPeople([...hiredPeople, p]);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} />}
        />
        <Route
          path="/hireform/:id"
          element={<PersonProfile handleAddPeople={handleAddPeople} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
