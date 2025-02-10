import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard({ people, hiredPeople }) {

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} hiredList={false}/>
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} hiredList={true}/>
      </section>
    </main>
  )
}

export default Dashboard
