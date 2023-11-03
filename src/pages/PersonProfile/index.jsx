import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useLocation } from 'react-router-dom'

function PersonProfile({ hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null)

  // using useLocation to access the person's data from the state attached using Link in the PeopleListItem component:
  const location = useLocation()

  // using useEffect to update the person state with the new data everytime the location changes:
  useEffect(() => {
    if (location.state) {
      const { person } = location.state
      setPerson(person)
    }
  }, [location])

  if (!person) return <p>Loading...</p>
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile
