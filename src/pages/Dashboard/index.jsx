import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'
import {json, useNavigate} from 'react-router-dom'

function Dashboard({hiredPeople, SetHiredPeopl,people}) {
  const navigate = useNavigate()
  
  const handleEdit = (person) => {

    navigate(`/edit/${person.login.uuid}`)
  }



  return (
    <main className="dashboard-layout">
      <section>
        <h2>People:</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People:</h2>
        <PeopleList people={hiredPeople} onEdit={handleEdit} />
      </section>
    </main>
  )
}

export default Dashboard
