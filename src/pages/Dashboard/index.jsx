import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'
import { useNavigate, Link } from 'react-router-dom'

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  const navigate = useNavigate()

  function fetchPeopleData() {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {
      setPeople(data.results)
      console.log(data)
    })
  }

  useEffect(() => {fetchPeopleData()}, [])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople}/>
        <li>ilham</li>
      </section>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </main>
  )
}

export default Dashboard
