import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'
import PersonProfile from '../PersonProfile';

function Dashboard(props) {
  const { hiredPeople, setHiredPeople, people} = props

  

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
