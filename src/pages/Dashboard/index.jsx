import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople, people } = props

  return (
    <main className="dashboard-layout">
    <section className="dashboard-section">
      <h2>People</h2>
      <PeopleList people={people}/>
    </section>
    <section className="dashboard-section">
      <h2>Hired People</h2>
      <PeopleList people={hiredPeople}/>
    </section>
  </main>
  )
}

export default Dashboard
