import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard({hiredPeople, peopleData}) {

  // useEffect(() => {
  //   console.log("LOGGING:", peopleData)
  // }, [])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={peopleData} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
