import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

import { peopleURL } from '../../apiEndpoints/endpoints';
import { Person } from '../../objects/PersonInfoObjects';



function Dashboard(props  : {hiredPeople : Person[];
                            hirePerson : (person: Person) => void;
                            candidates : Person[];
}) {
  const { hiredPeople, hirePerson, candidates } = props
  //console.log(candidates)




  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList candidates={props.candidates} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList candidates={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
