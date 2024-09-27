import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';

function PersonProfile(props) {
  console.log("Inside PersonProfile: ", { props });

  const [person, setPerson] = useState(null)
  const { id } = useParams()
  const { people } = props
  useEffect(() => {
    if (people && id) {
      setPerson(people.find((person) => 
      (person.name.first+person.name.last) === (id)))
    }
  }, [people, id])
  
  if (!person) return <p>Loading...</p>


  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={props.hiredPeople} setHiredPeople={props.setHiredPeople}/>
    </article>
  )
}

export default PersonProfile
