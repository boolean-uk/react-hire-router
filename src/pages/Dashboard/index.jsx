import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard({hiredPeople, people}) { 

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} edit={false} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} edit={true} />
      </section>
    </main>
  )
}

export default Dashboard
