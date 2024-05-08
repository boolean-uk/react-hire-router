/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PeopleList from "./components/PeopleList";

function Dashboard(props) {
  const { hiredPeople } = props;

  const [people, setPeople] = useState([]);

  const url = "https://randomuser.me/api/?seed=seed&results=50";

  useEffect(() => {
    fetch(url).then(async (response) => {
      let data = await response.json();
      let people = data.results;
      setPeople(people);
    });
  }, []);

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
