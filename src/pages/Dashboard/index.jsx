import { useState, useEffect} from 'react'
import PeopleList from './components/PeopleList'

const BASE_URL = "https://randomuser.me/api/";
const NUM_RESULTS = "results=50";

function Dashboard(props) {
  const { hiredPeople } = props
  const [people, setPeople] = useState([])


  function obtainApplicants() {
    fetch(`${BASE_URL}?${NUM_RESULTS}`)
      .then((response) => response.json())
      .then((result) => setPeople(result.results))
  }

  useEffect(obtainApplicants, []);

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
