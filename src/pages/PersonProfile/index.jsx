import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

function PersonProfile(props) {
  const [person, setPerson] = useState()
  const { id } = useParams()

  useEffect(() => {
    setPerson(props.people.filter((p) => p.login.uuid === id)[0])
  }, [props.people, id])
    
  if (!person) return <p>Loading...</p>
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={props.hirePerson}/>
    </article>
  )
}

PersonProfile.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  hirePerson: PropTypes.func,
}

export default PersonProfile
