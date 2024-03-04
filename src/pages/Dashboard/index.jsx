import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'
import { Link, Route, Routes } from "react-router-dom";


function Dashboard(props) {
  const { hiredPeople, people, setHiredPeople } = props

// console.log(people)
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
  );
}

export default Dashboard
