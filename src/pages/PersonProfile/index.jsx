import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null)
  console.log('hired - PersonProfile: ' + hiredPeople)

  const { id } = useParams()
  
  useEffect(()=> {
    if(people && id){
      const matchingPerson = people.find((person) => Number(person.id) === Number(id));
      setPerson(matchingPerson);
    }
  }, [people, id])


  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>
    </article>
  )
}

export default PersonProfile
