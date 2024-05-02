import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard({ hiredPeople }) {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(setPeople)
  }, [])

  console.log(people)

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people.results} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
