import { useEffect, useState } from "react"
import PeopleList from "./components/PeopleList"

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  async function getPeopleData() {
    const FIELDS_PARAM = 'gender, name, email, id, picture, phone, cell'
    const url = `https://randomuser.me/api/?results=50&inc=${FIELDS_PARAM}`

    const response = await fetch(url)
    const json = await response.json()
    // console.log(json.results)
    setPeople(json.results)
  }

  useEffect(() => {
    getPeopleData()
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
