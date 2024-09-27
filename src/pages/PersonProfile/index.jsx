import { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import HireForm from './components/HireForm'

function PersonProfile(props) {

  const {hiredPeople, setHiredPeople} = props

  const [person, setPerson] = useState(null)


  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { person } = location.state
      setPerson(person)
    }
  }, [location]);

if (!person) return <p>Loading...</p>

  return (
    <article>

      <h2>{person.name.first} {person.name.last}</h2>
      <p>{person.gender}</p>
      <p>{person.email}</p>
      <p>{person.phone}</p>
      <p>{person.location.city}</p>
      <HireForm person={person} 
      hiredPeople={hiredPeople} 
      setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile