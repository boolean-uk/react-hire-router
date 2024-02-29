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
    localStorage.setItem("people", JSON.stringify(json.results));
  };

  useEffect(() => {
    const peopleString = localStorage.getItem("people");
    if (!peopleString) {
      fetchPeople();
    } else {
      setPeople(JSON.parse(peopleString));
    }

    const sessionHiredPeople = sessionStorage.getItem("hiredPeople");
    if (sessionHiredPeople) {
      setHiredPeople(JSON.parse(sessionHiredPeople));
      setPeople(
        JSON.parse(peopleString).filter(
          (p) => !hiredPeople.find((h) => h.id.value === p.id.value)
        )
      );
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
