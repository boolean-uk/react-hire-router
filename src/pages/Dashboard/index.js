import { useState } from "react"
import PeopleList from "./components/PeopleList"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard(props) {
  const { hiredPeople } = props
  const navigate = useNavigate()
  const [people, setPeople] = useState([])
  
  async function peopleData() {
    const response = await fetch('https://randomuser.me/api/?results=50')
    const json = await response.json()
    console.log(json)
    setPeople(json.results)
    
  }
  useEffect(()=>{
    peopleData()
  },[])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2> 
        <button onClick={()=> navigate('/')}>Go back</button>
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
