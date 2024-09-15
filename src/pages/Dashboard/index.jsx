import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import PeopleList from './components/PeopleList'
import PersonProfile from "../PersonProfile/index.jsx"

function Dashboard(props) {
  const { hiredPeople, people, setPeople } = props
 
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
