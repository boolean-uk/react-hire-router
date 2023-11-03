import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard({ hiredPeople }) {

  const [people, setPeople] = useState([])

  const userURL = "https://randomuser.me/api?results=50"
  // const userURL = "https://randomuser.me/api?inc=name&results=50"

  useEffect(() => {
    fetch(userURL)
    .then(res => res.json())
    .then(data => {
      setPeople(data.results)
    })
  }, [])
  

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
