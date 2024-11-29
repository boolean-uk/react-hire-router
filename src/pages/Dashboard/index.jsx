import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'
import PropTypes from "prop-types";

function Dashboard(props) {
  const hiredPeople = props.hiredPeople
  const people = props.people

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        {people !== undefined && <PeopleList people={people} hired={false} />}
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} hired={true} />
      </section>
    </main>
  )
}

Dashboard.propTypes = {
  hiredPeople: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired
}

export default Dashboard
