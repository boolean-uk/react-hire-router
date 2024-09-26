import { useState, useEffect } from "react";
import PeopleList from "./components/PeopleList";

function Dashboard({ hiredPeople }) {
  const [people, setPeople] = useState([]);

  const fetchPeople = () => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
        console.log(data.results);
      });
  };
  useEffect(fetchPeople, []);
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
