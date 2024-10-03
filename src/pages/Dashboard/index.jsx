
import PeopleList from './components/PeopleList'

// eslint-disable-next-line react/prop-types
export default function Dashboard({people, hiredPeople}) { //two props, people which is array fetched from api and hiredPeople which is people hired.
  

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

{/* dashboard layout with two sections. One for people and one for hired people. */}