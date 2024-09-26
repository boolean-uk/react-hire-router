/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { people, hiredPeople } = props
  const [peopleList, setPeopleList] = useState();
  const [hiredPeopleList, setHiredPeopleList] = useState();

  useEffect(() => {
    setPeopleList(<PeopleList people={people} edit={false} />)
  }, [people]);

  useEffect(() => {
    setHiredPeopleList(<PeopleList people={hiredPeople} edit={true} />)
  }, [hiredPeople]);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        {peopleList && peopleList}
      </section>
      <section>
        <h2>Hired People</h2>
        {hiredPeopleList && hiredPeopleList}
      </section>
    </main>
  )
}

export default Dashboard
