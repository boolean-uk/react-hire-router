import { useState } from "react";
import PeopleList from "./components/PeopleList";

const apiUrl = "https://randomuser.me/api?inc=name,id&results=50";

function Dashboard(props) {
  const { hiredPeople } = props;

  const [people, setPeople] = useState([]);

  const getList = async () => {
    const fetchList = await fetch(`${apiUrl}`);
    if (fetchList.ok) {
      const data = await fetchList.json();
      return data;
    } else {
      throw new Error("Failed to fetch data");
    }
  };

  useEffect(getList, []);

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
