import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'



function Dashboard(props) {
  const people = props.allPeople;
  const hiredPeople  = props.hiredPeople;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} hired={true} removeOffer={props.removeOffer} />
      </section>
    </main>
  )
}

export default Dashboard

