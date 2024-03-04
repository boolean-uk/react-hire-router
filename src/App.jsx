import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import { useEffect } from "react";
import EditForm from "./pages/PersonProfile/components/EditForm";
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  function onHire(person) {
    setHiredPeople([...hiredPeople, person]);
  }
  function onEdit(person, index) {
    setHiredPeople(prevHiredPeople =>
      prevHiredPeople.map((p, i) => (i === index ? person : p))
    );  }

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((item) => setPeople(item.results));
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              hiredPeople={hiredPeople}
              onHire={onHire}
              people={people}
            />
          }
        />
        {people.map((person, index) => {
          return (
            <Route
              key={"hire" + index}
              path={`/view/${index}/`}
              element={
                <PersonProfile person={person} id={index} onHire={onHire} />
              }
            />
          );
        })}
        {hiredPeople.map((person, index) => {
          return (
            <Route
              key={"edit+" + index}
              path={`/edit/${index}/`}
              element={<EditForm person={person} id={index} onEdit={onEdit} />}
            />
          );
        })}
      </Routes>
    </>
  );
}
