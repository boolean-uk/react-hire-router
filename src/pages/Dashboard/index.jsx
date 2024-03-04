import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import PeopleList from './components/PeopleList'
import PersonProfile from "../PersonProfile/index.jsx"

function Dashboard(props) {
  const { hiredPeople, people, setPeople } = props
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      fetch(`https://randomuser.me/api/?results=5`)
        .then((response) => response.json())
        .then((data) => {
          const updatedData = data.results.map((person, index) => (
            { ...person, id: index + 1, wage: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000 }
          ));
          setPeople(updatedData);
          setDataFetched(true);
        });
    }
  }, [dataFetched]);

  console.log(people[1]);
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
  )
}

export default Dashboard
