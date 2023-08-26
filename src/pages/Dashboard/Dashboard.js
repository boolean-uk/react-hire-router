import { useState } from "react"
import PeopleList from "./components/PeopleList"
import { useEffect } from "react"

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  useEffect(() => {
    const getData = async () => {

      const res = await fetch('https://randomuser.me/api/?page=3&results=50&seed=abc');
      const data = await res.json();
      setPeople(data.results);
    };

    getData();
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        {hiredPeople && <PeopleList people={hiredPeople} />}
      </section>
    </main>
  )
}

export default Dashboard
