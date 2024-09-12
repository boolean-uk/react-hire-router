import { useEffect, useState } from "react";
import PeopleList from "./components/PeopleList";

const ROOT_URL = "https://randomuser.me/api/?results=50";

function Dashboard(props) {
  const { hiredPeople } = props;

  const [people, setPeople] = useState([]);

  const fetchData = () => {
    fetch(ROOT_URL)
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  };

  useEffect(fetchData, []);

  return (
    <main className="dashboard-layout grid grid-cols-2 gap-4 p-4">
      <section>
        <h2 className="text-lg">People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2 className="text-lg">Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
