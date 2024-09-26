import { useState } from 'react'
import PeopleList from './components/PeopleList'
import { useEffect } from 'react'



const url = "https://randomuser.me/api/?results=50"

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])
  const fetchData = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPeople(data.results))
  }
  useEffect(fetchData, [])

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
