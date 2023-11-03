/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople } = props

  const [allPeople, setPeople] = useState([])

  // console.log(allPeople)
  // console.log(hiredPeople)

  const getPeople = () => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => setPeople(data.results))
  }

  useEffect(getPeople, [])


  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={allPeople} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
