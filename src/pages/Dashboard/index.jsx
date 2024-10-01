/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import PeopleList from './components/PeopleList'

export default function Dashboard({people, hiredPeople}) {
  return (
    <main className="dashboard-layout">
      <section className='people'>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section className='hired-people'>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

