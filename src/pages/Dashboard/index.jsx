import { useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard({data, hired, wage }) {
  const [people, setPeople] = useState([])




  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList data={data} />
      </section>
      <section>
        <h2>Hired People</h2>
{  console.log("hireddd")}
  {console.log(hired)}
        
        <PeopleList data={hired} />
      </section>
    </main>
  )
}

export default Dashboard
