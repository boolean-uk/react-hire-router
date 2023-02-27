// I was recieveing an error constantly last night when working on this.
// No matter what I did it was stating that "Link was defined but never used"
// Upon reviewing the exemplar exercise I learned that my syntax was off
// when declaring my imports (quite frustrating as it was such an easy fix lol)
import { useState } from "react";
import "./styles.css";
import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  // useEffect(() => {

  //   fetch(`https://randomuser.me/api/?results=50`)
  //     .then((res) => res.json())
  //     .then((data) => setPeople(data.results));

  // }, [hiredPeople]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
      </Routes>
    </>
  );
}
