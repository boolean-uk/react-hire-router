import { useState, useEffect, useContext } from 'react'
import { peopleContext } from '../../App'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

function PersonProfile() {
  const [person, setPerson] = useState()
  const { id } = useParams()
  const { people } = useContext(peopleContext)

  useEffect(() => {
    setPerson(people.filter((p) => p.login.uuid === id)[0])
  }, [people, id])
    
  if (!person) return <p>Loading...</p>
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person}/>
    </article>
  )
}

PersonProfile.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  hirePerson: PropTypes.func,
}

export default PersonProfile
