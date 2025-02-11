import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const hiredPeople = props.hiredPeople
  const people = props.people


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
