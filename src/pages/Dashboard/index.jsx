import { useState } from 'react'
import PropTypes from "prop-types"
import PeopleList from './components/PeopleList'

function Dashboard({ hiredPeople, people } ) {

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

Dashboard.propTypes = { 
  people: PropTypes.array.isRequired,
	hiredPeople: PropTypes.array.isRequired,
}

export default Dashboard
