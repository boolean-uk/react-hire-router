import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

function PersonProfile(props) {
  const { people, hiredPeople, setPeople, setHiredPeople } = props
  const [person, setPerson] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    if (people.length > 0 && id) {
      let person = hiredPeople.find((person) => person.login.uuid === id)
      if (!person) person = people.find((person) => person.login.uuid === id)
      setPerson(person)
    }
  }, [id, people, hiredPeople])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm setPeople={setPeople} setHiredPeople={setHiredPeople} person={person} />
    </article>
  )
}

PersonProfile.propTypes = {
  people: PropTypes.array,
  hiredPeople: PropTypes.array,
  setPeople: PropTypes.func,
  setHiredPeople: PropTypes.func,
}

export default PersonProfile
