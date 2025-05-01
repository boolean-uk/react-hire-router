import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'
import PeopleListHired from './components/PeopleListHired'
function Dashboard(props) {
  // eslint-disable-next-line react/prop-types
  const { hiredPeople } = props
  
  

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={props.people} hiredPeople = {hiredPeople} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleListHired people={hiredPeople} handleEdit = {props.handleEdit} />
      </section>
    </main>
  )
}

export default Dashboard
