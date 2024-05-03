import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { people, setHiredPeople, hiredPeople } = props

  const urlParams = useParams()

  // console.log(urlParams.id)
  const test = people.find(p => p.id.value === urlParams.id)
  // console.log(test)

  useEffect(() => {
    setPerson(test)
  }, [])


  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} person={person} />
    </article>
  )
}

export default PersonProfile
