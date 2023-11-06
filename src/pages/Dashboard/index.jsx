import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

const apiUrl = "https://randomuser.me/api?inc=name,id&results=50";


function Dashboard({hiredPeople}) {
  //const { hiredPeople } = props

  const [people, setPeople] = useState([])

  function getList() {
    fetch (`${apiUrl}`)
      .then((response) =>response.json())
      .then((data) => setPeople(data.results))
  }
  useEffect(getList, []);

  



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

export default Dashboard;
