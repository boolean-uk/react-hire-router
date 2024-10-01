import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  // eslint-disable-next-line react/prop-types
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  useEffect (() => {
    const dataPeople = async() => {
      try {
        const respsonse = await fetch('https://randomuser.me/api/?results=20')
        if(respsonse.ok === false) {
          throw new Error('Response from detching randomUser was a failure!')
        }
        const data = await respsonse.json()
        setPeople(data.results)
      } catch(err) {
        console.error('ERROR! Could not complete Fetch operation:', err)
      }
    }
    dataPeople()
  }, [])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} hired={false}/>
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} hired={true} />
      </section>
    </main>
  )
}

export default Dashboard
