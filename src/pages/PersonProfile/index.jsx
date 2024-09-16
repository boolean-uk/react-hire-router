import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useLocation, useNavigate } from 'react-router-dom'
// import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState()
 
  const { hiredPeople, setHiredPeople} = props



  const location = useLocation()

  useEffect(() => {
    if (location.state) {
      setPerson(location.state)
    }
}, [location])



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
