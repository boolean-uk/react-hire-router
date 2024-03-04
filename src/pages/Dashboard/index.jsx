import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople, people, hirePerson, editPerson } = props


  

  console.log(people)

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} hirePerson={hirePerson}/>
      </section>
      <section>
        <h2>Hired People</h2>
        <ul>
          {hiredPeople.map((person, index) => (
            <li key={index}>{person.name.first} {person.name.last} {person.wage}
            <Link to={`/edit/${index}`}>Edit</Link>
            </li>
          ))}
          

          {console.log(hiredPeople)}
        </ul>
        
      </section>
    </main>
  )
}

export default Dashboard
