import { useEffect, useState } from "react";
import PeopleList from "./components/PeopleList";

function Dashboard(props) {
  const { hiredPeople, people } = props;

  const notHired = () =>
    people.filter(
      (person) => !Object.prototype.hasOwnProperty.call(person, "wage")
    );

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        {<PeopleList people={notHired()} />}
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
