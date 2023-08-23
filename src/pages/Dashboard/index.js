import { useEffect, useState } from "react"
import PeopleList from "./components/PeopleList"

function Dashboard({ hiredPeople, handleEdit }) {
  const [people, setPeople] = useState([])

  async function getPeopleData() {
    /** NOTE:
     * Sometimes, randomuser api returns an empty id: { '', null }.
     * Therefore, retrieve 80 random users, filter out all users with empty id, and store first 50 objects to ensure that we end up with 50 random users with valid id properties
    */
    const USERS_NUM_PARAM = 80
    const FIELDS_PARAM = 'gender, name, email, id, picture, phone, cell'
    const url = `https://randomuser.me/api/?results=${USERS_NUM_PARAM}&inc=${FIELDS_PARAM}`

    const response = await fetch(url)
    const json = await response.json()
    const results = json.results.filter(item => 
      (item.id.name !== '') && (item.id.value !== null)
    )
    results.splice(50)
    setPeople(results)
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
        <PeopleList people={hiredPeople} handleEdit={handleEdit} />
      </section>
    </main>
  )
}

export default Dashboard
