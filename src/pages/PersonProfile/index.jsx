import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { people, hiredPeople, setHiredPeople, setPeople } = props
  const { id } = useParams()

  useEffect(() => {
    setPerson(people.find((curr) => curr.login.uuid === id))
  }, people)

  if (!person) return <p>Loading...</p>


  

  return (
    <article>
     <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setPeople={ setPeople } setHiredPeople={ setHiredPeople } />
    </article>
  )
}

export default PersonProfile
