import { useState, useEffect} from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  const fetchUser = () => {
  fetch("https://randomuser.me/api/?results=30")
  .then((response) => response.json())
  .then((data) => setPeople(data.results))
  }

  useEffect(fetchUser, [])

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
