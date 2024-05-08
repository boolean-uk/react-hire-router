import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import EditPersonProfile from "./pages/PersonProfile/EditPersonProfile";
import "./App.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  function addToHiredPeople(person) {
    let updatedHiredPeople = [...hiredPeople];
    updatedHiredPeople.push(person);
    setHiredPeople(updatedHiredPeople);
  }

  function updateHiredPerson(updatedHiredPerson) {
    let updatedHiredPeople = hiredPeople.map((hiredPerson) => {
      if (updatedHiredPerson.index === hiredPerson.index) {
        return updatedHiredPerson;
      }
      return hiredPerson;
    });
    setHiredPeople(updatedHiredPeople);
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <Routes>
          <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
          <Route
            path="/view/:id"
            element={<PersonProfile addToHiredPeople={addToHiredPeople} />}
          />
          <Route
            path="/view/:id/edit"
            element={
              <EditPersonProfile updateHiredPerson={updateHiredPerson} />
            }
          />
        </Routes>
      </header>
    </>
  );
}
