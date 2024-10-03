import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile({people, hiredPeople, setHiredPeople}) {
  const [person, setPerson] = useState(null)

  const {id} = useParams()

  useEffect(() => {
    const thisPerson = people.find((p) => p.id.value === id)
    setPerson(thisPerson)
  }, [people])
  

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
