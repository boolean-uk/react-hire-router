import { useState } from 'react'
import HireForm from './components/HireForm'
import { useLocation } from 'react-router-dom'

function PersonProfile({hiredPeople , setHiredPeople }) {

  const [person, setPerson] = useState()
  const locate = useLocation()

  useEffect (()=>{
    if(locate.state) {
      const{person}=locate.state
      setPerson(person)
    }
  },[locate]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm   hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}  person={person} />
    </article>
  )
}

export default PersonProfile
