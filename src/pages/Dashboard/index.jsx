import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { people, hiredPeople,setHiredPeople } = props
  const [editable, setEditable ] = useState(false);

  function handleButtomClick(event) {
    event.preventDefault()
    setEditable(!editable)
  }



  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople}  editable={editable} setHiredPeople={setHiredPeople}/>
      <button onClick={handleButtomClick}>edit</button>
      </section>

    </main>
  )
}

export default Dashboard
