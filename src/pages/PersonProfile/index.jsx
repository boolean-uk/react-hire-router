import { useState } from 'react'
import HireForm from './components/HireForm'
import PeopleList from '../Dashboard/components/PeopleList'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  if (!person) return <p>Loading...</p>

useEffect(() => {
  fetch('https://randomuser.me/api/?results=50')
  .then(res => res.json())
  .then(data => setPeople(data.results))
}, [] )



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
