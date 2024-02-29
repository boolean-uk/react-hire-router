import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'
import { Routes, Route } from 'react-router-dom'
import PersonProfile from '../PersonProfile'

function Dashboard({hiredPeople, people}) {


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
      <Routes>
      <Route
          path='/view/:id'
          element={<PersonProfile people={people}/>}
        />
      </Routes>
    </main>
  )
}

export default Dashboard
