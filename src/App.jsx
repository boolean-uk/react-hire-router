import { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "https://randomuser.me/api/";
const NUM_RESULTS = "results=50";

export default function App() {
  const [applicants, setApplicants] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  function obtainApplicants() {
    fetch(`${BASE_URL}?${NUM_RESULTS}`)
      .then((response) => response.json())
      .then((result) => setApplicants(result))
  }

  useEffect(obtainApplicants, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
