import { useState } from 'react'
import PeopleList from './components/PeopleList'
import { useEffect } from 'react'

function Dashboard(props) {
  const { hiredPeople } = props

  //const [people, setPeople] = useState([])

  const {people} = props

  const {setHiredPeople}= props


  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={props.people} setHiredPeople={props.setHiredPeople} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} setHiredPeople={props.setHiredPeople}/>
      </section>
    </main>
  )
}

export default Dashboard
