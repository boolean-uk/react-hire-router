import { useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople, people } = props
  
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        {people.length !== 0 ? <PeopleList people={people.results} /> : "loading"}
      </section>
      <section>
        <h2>Hired People</h2>
        {hiredPeople !== 0 ? <PeopleList people={hiredPeople} /> : "Loading"}
      </section>
    </main>
  )
}

export default Dashboard
