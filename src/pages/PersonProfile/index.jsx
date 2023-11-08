import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useLocation } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  const {hiredPeople, setHiredPeople} = props
  const location = useLocation ()

  useEffect(() => {
    if (location.state) {
      const { person } = location.state
      setPerson(person)
    }
  }, [location]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
      <img className='img' src={`${person.picture.large}`} alt={`${person.name.first} ${person.name.last}`} />
      <h2 className='h2'> {person.name.first} {person.name.last}</h2> <span className='email'><em>{person.email}</em></span> 
      <HireForm 
      person={person} 
      hiredPeople={hiredPeople}
      setHiredPeople={setHiredPeople}
      />
    </article>
  )
}

export default PersonProfile
