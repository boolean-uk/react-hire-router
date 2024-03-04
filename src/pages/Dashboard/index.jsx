import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'


function Dashboard(props) {
  const { people, hiredPeople } = props

  console.log("dashboard", people)
  console.log("hired", hiredPeople)

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
