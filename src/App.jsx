import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export const PeopleContext = createContext();

export default function App() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  const addHiredPerson = (person) => {
    const personIndex = hiredPeople.findIndex(
      (h) => h.id.value === person.id.value
    );
    if (personIndex != -1) {
      const update = hiredPeople;
      update[personIndex] = person;
      setHiredPeople(update);
      return;
    }
    setHiredPeople([...hiredPeople, person]);
  };

  const fetchPeople = async () => {
    const response = await fetch("https://randomuser.me/api/?results=50");
    const json = await response.json();
    setPeople(json.results);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/">Dashboard</Link>
          </ul>
        </nav>
      </header>
      <PeopleContext.Provider value={{ addHiredPerson }}>
        <Routes>
          <Route
            path="/"
            element={<Dashboard people={people} hiredPeople={hiredPeople} />}
          />
          <Route
            path="/view/:id"
            element={<PersonProfile setHiredPeople={setHiredPeople} />}
          />
        </Routes>
      </PeopleContext.Provider>
    </>
  );
}
