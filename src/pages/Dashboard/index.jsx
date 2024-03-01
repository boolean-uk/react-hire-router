import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople, peopleData } = props

  const [people, setPeople] = useState([])
  useEffect(() => {
    setPeople(peopleData)
    // console.log("USEEFFECT", people);
  }, [peopleData, people]);
  // console.log()

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
