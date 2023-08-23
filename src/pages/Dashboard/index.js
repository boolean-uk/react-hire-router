import { useState,useEffect } from "react"
import PeopleList from "./components/PeopleList"

function Dashboard(props) {
  const { hiredPeople } = props
  
  const [people, setPeople] = useState([])

  async function fetchPeople() {
    const response = await fetch('https://randomuser.me/api/?results=50')
    const json = await response.json()
    setPeople(json.results)
  }

  useEffect(() => {
    fetchPeople()
  }, [])
  
  console.log(people)

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

export default Dashboard
