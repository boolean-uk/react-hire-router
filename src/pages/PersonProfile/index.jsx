import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const { setHiredPeople, hiredPeople, people} = props
  const [person, setPerson] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    if(people && id){
      const matchingPerson = people.find((person) =>
      person.id.value === id)
      setPerson(matchingPerson)
      console.log(person)
      console.log(hiredPeople)
    }
  }, [people, id])


  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person}
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
        />
    </article>
  )
}

export default PersonProfile
