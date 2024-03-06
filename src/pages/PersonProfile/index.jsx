import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'
import PropTypes from 'prop-types'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  let {id} = useParams()

  useEffect(() => {
    let foundPerson = props.people.find(p => p.id.value === id) ? props.people.find(p => p.id.value === id) : props.people.find(p => p.name.first + p.name.last === id)

    //if not found in people, search hired
    if(!foundPerson) {
      foundPerson = props.hiredPeople.find(p => p.id.value === id) ? props.hiredPeople.find(p => p.id.value === id) : props.hiredPeople.find(p => p.name.first + p.name.last === id)
    }
    setPerson(foundPerson)

  }, [props.people, props.id])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={props.hiredPeople} setHiredPeople={ props.setHiredPeople } people={props.people} setPeople={props.setPeople} />
    </article>
  )
}

PersonProfile.propTypes = {
  id: PropTypes.string.isRequired,
  person: PropTypes.object.isRequired,
  setPeople: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired,
  setHiredPeople: PropTypes.func.isRequired,
  hiredPeople: PropTypes.array.isRequired
}

export default PersonProfile
