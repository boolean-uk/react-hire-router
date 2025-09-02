/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PeopleList from "./components/PeopleList";

function Dashboard({ hiredPeople }) {
  const [peopleData, setPeopleData] = useState([]);
  const apiUrl = "https://randomuser.me/api/";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl + "?results=50");
      const jsonData = await response.json();
      setPeopleData(jsonData.results);
    };
    fetchData();
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={peopleData} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople}/>
      </section>
    </main>
  );
}

export default Dashboard;
