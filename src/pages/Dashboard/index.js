import { useState, useEffect } from "react"
import PeopleList from "./components/PeopleList"

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])
  console.log(people)

  async function getPeople() {
    const retrievePeople = await fetch('https://randomuser.me/api/?results=50')
    const json = await retrievePeople.json()
    setPeople(json.results)
    console.log("getting user", json.results)
  }
  
  useEffect(() => {
    getPeople()
    console.log("People info retrieved")
  }, [])

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
