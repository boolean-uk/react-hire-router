import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';



function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  let { id } = useParams();
  async function fetchApiData() {

    const response = await fetch('https://randomuser.me/api/?results=50')
    const data = await response.json()
    console.log(data)

    setPerson(data.results[0])
  }

useEffect(() => {fetchApiData()}, [])

  if (!person) return <p>Loading...{id}</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
