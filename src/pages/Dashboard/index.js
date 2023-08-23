import { useState, useEffect } from "react";
import PeopleList from "./components/PeopleList";

function Dashboard({ hiredPeople }) {
  const [people, setPeople] = useState({ results: [] });

  async function getPeople() {
    const response = await fetch("https://randomuser.me/api/?results=50");
    const json = await response.json();
    setPeople(json);
  }

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={{results: hiredPeople}} />
      </section>
    </main>
  );
}

export default Dashboard;
