import { useState } from "react";
import PeopleList from "./components/PeopleList";

function Dashboard(props) {
  console.log("Dashboard props: ", props);
  const { peopleList, onHire } = props;
  //console.log("people: ", people);
  //console.log("hiredPeople in dachboard ", hiredPeople);
  const [people, setPeople] = useState([]);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={peopleList} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={people} />
      </section>
    </main>
  );
}

export default Dashboard;
