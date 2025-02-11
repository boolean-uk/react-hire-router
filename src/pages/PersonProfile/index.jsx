import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({hiredPeople, setHiredPeople, people}) {
  const [person, setPerson] = useState(null)
  const { id } = useParams();


  useEffect(() => {
    if(people && id){
        const matchingPerson = people.find((person) => {
          return Number(people.indexOf(person)) === Number(id)
        })
        setPerson(matchingPerson)
    }

  }, [people, id])


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
