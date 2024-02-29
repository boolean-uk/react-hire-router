import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'


function PersonProfile({people, hiredPeople, addHired}) {
  const [person, setPerson] = useState(null)
  const [existingWage, setExistingWage] = useState(0)

  const {id}= useParams()

  const matchingPerson = people.find(x => x.id.value === id) 
    ? people.find(x => x.id.value === id) 
    : hiredPeople.find(x => x.id.value === id)

  useEffect(() => {
    if('wage' in matchingPerson) {
      setExistingWage(matchingPerson.wage)
    }
  },[existingWage])

  useEffect(() => {
    setPerson(matchingPerson)
  },[person])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} existingWage={existingWage} addHired={addHired} />
    </article>
  )
}

export default PersonProfile
