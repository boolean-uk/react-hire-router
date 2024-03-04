import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { id } = useParams()
  const { people } = props

  useEffect(() => {
    if (people && id) {
      const matchingPerson = people.results.find((person) =>
      person.login.uuid === id)
      setPerson(matchingPerson)
    }
  }, [people, id])

  if (!person) return <p>Loading...</p>

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
