import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null)

  // using useParams to access :id param from URL and assign to variable:
  const { id } = useParams()

  // useEffect updates the person state with the new data everytime the "id"
  // or "people" data change.
  // "people" is the api data passed down from App.jsx as a prop
  useEffect(() => {
    if (people && id) {
      setPerson(people.find((x) => x.id.value === id))
    }
  }, [people, id])

  if (!person) return <p>Loading/No valid ID...</p>
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
