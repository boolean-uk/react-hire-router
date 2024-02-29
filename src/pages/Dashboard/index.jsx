import { useEffect, useState } from "react";
import PeopleList from "./components/PeopleList";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);
  const { state } = useLocation();

  const fetchPeople = async () => {
    const response = await fetch("https://randomuser.me/api/?results=50");
    const json = await response.json();
    setPeople(json.results);
  };

  useEffect(() => {
    const peopleString = localStorage.getItem("people");
    if (!peopleString) {
      fetchPeople();
      localStorage.setItem("people", JSON.stringify(people));
    } else {
      setPeople(JSON.parse(peopleString));
    }

    if (state) {
      setHiredPeople([...hiredPeople, state]);
    }
  }, [state]);

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
