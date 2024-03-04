import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({ people, hiredPeople, setPeople, setHiredPeople }) {
  const [person, setPerson] = useState()
  const { id } = useParams()

  useEffect(() => {
    const foundPerson = (
      people?.find(person => person.id.value === id) ||
      hiredPeople?.find(person => person.id.value === id)
    )
    if (foundPerson)
    {
      setPerson(foundPerson);
    }
  }, [id, person, people, hiredPeople]);

  if (person)
  {
    return (
      <article>
        <h2>
          {person.name.first} {person.name.last}
        </h2>
        <HireForm
          person={person}
          people={people}
          setPeople={setPeople}
          setHiredPeople={setHiredPeople}
        />
      </article>
    )
  }
}

import PropTypes from 'prop-types'
PersonProfile.propTypes = {
  setHiredPeople: PropTypes.func,
  setPeople: PropTypes.func,
  hiredPeople: PropTypes.arrayOf(PropTypes.object),
  people: PropTypes.arrayOf(PropTypes.object)
}

export default PersonProfile
