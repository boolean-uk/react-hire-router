import { useState, useEffect} from 'react'
import HireForm from './components/HireForm'
import { useLocation } from 'react-router-dom'

function PersonProfile(props) {
  const {hiredPeople, setHiredPeople} = props
  const [person, setPerson] = useState(null)
  const location = useLocation()
  const { from } = location.state


  useEffect(() => {
    setPerson(from);
  }, [from]);


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
