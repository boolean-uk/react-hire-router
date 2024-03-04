import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'
import { Link } from 'react-router-dom';

function Dashboard(props) {
  const { hiredPeople } = props

  const { people } = props;



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
