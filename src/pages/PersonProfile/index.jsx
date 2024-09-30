import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import EditForm from './components/EditForm';
import { useParams } from 'react-router-dom'

function PersonProfile({people, hiredPeople, setHiredPeople}) {
  const {id}=useParams();
  const [person, setPerson] = useState(null)
  let isHired = false;

  useEffect(() => {
    if(people && id){
      const matchingPerson = people.find((person) => person.login.uuid === id)
      setPerson(matchingPerson)
    }
  }, [people, id])

  if(!person){
    return <p>Loading...</p>
  } 

  if(hiredPeople.some(p => p.login.uuid === person.login.uuid)){
    isHired = true;
  }

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {isHired ?
        <EditForm person={person} /> :  
        <HireForm person={person} setHiredPeople={setHiredPeople} />}
    </article>
  )
}

export default PersonProfile
