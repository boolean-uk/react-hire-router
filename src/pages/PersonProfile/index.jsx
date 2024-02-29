import { useState, useEffect} from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const { users, hirePerson, hiredPeople } = props
  const [person, setPerson] = useState(null)
  const {id} = useParams()  

  useEffect(() => {        
    let obj = hiredPeople.find(p => p.login.uuid === id);
    if (obj === undefined){
      obj = users.find(p => p.login.uuid === id); 
    }       
    setPerson(obj)
  }, [users, id, hiredPeople])

  if (!person) return <p>Loading...</p>
  
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={hirePerson} hiredPeople={hiredPeople} />
    </article>
  )
}

export default PersonProfile
