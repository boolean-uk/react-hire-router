import './dashboard.css'
import { useEffect, useState, forwardRef } from "react"
import PeopleList from "./components/PeopleList"

const Dashboard = forwardRef((props, ref) => {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
      .then(res=>res.json())
      .then(data=>setPeople(data.results))
  },[])

  return (
    <main className="dashboard-layout">
      <section ref={ref}>
        <h2 >People</h2>
        <PeopleList people={people}/>
      </section>
      <div className="line" ref={ref}></div>
      <section ref={ref}>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople}/>
      </section>
    </main>
  )
})

export default Dashboard
