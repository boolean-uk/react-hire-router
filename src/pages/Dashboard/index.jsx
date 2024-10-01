import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {

  const {people, hiredPeople, setHiredPeople} = props
  
  const notHiredPeople = people.filter(
    person => !hiredPeople.some(hired => hired.login.uuid === person.login.uuid)
  )

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={notHiredPeople} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList  people = {hiredPeople}  />
      </section>
    </main>
  )
}

export default Dashboard
