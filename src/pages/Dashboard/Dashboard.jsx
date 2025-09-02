
import PeopleList from './components/PeopleList'
/* eslint-disable react/prop-types */

function Dashboard({ people, hiredPeople, setHiredPeople}) {

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <hr/>
        <PeopleList people={people} link={true} remove={false} />
      </section>
      <section>
        <h2>Hired People</h2>
        <hr/>
        <PeopleList people={hiredPeople} link={false} remove={true} setHiredPeople={setHiredPeople}/>
      </section>
    </main>
  )
}

export default Dashboard
