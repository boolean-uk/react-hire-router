import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'
import Card from './components/Card'

function Dashboard({ hiredPeople, people }) {
  return (
    <div className="row g-4">
      <div className="col-md-6">
        <Card title="People">
          <PeopleList people={people} />
        </Card>
      </div>
      <div className="col-md-6">
        <Card title="Hired People">
          <PeopleList people={hiredPeople} />
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
