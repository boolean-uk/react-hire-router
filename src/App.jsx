import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import EditForm from "./pages/PersonProfile/components/EditForm";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(people);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        >
          {" "}
          Dashboard
        </Route>

        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={people}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
            />
          }
        ></Route>
        
        <Route
          path="/view/:id/edit"
          element={<EditForm people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} />}
        ></Route>
      </Routes>
    </>
  );
}
