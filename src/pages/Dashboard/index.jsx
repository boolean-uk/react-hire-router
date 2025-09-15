/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { people, hiredPeople } = props

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} hired={false} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} hired={true} />
      </section>
    </main>
  )
}

export default Dashboard
