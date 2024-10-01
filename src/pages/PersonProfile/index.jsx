import { useState } from 'react'
import HireForm from './components/HireForm'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState({name: {first: "", last:""}})
  const {id} = useParams();
  const {people} = props
  const {setHiredPeople}=props
  
  useEffect(() => {
    setPerson(people[Number(id)])
  }, [people, id])
  
  


  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople}/>
    </article>
  )
}

export default PersonProfile
