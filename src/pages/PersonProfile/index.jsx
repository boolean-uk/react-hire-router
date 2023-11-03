import { useState, useEffect} from 'react'
import HireForm from './components/HireForm'
import {useLocation} from 'react-router-dom'
function PersonProfile(props) {
  const linkedPerson= useLocation().state.person  
  const [person, setPerson] = useState(null)


  useEffect( () =>{
    setPerson(linkedPerson);
  },[])

  if (!person) return <p>Loading.......</p>
  

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
    

}

export default PersonProfile
