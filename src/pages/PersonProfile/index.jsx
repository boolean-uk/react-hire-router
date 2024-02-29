import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

import PropTypes from 'prop-types';

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const { id } = useParams()
  const person = people.find(person => person.login.uuid === id)
  if (!person) return <p>Loading...</p>
  const hiredPerson = hiredPeople.find(hiredPerson => hiredPerson.login.uuid === id)

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {
        hiredPerson ? (
          <>
            <p>Already hired for: £{hiredPerson.wage}</p>
            <p>Edit payment below:</p>
            <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
          </>
        )
          :
          (
            <>
              <p>Not Hired</p>
              <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
            </>
          )
      }

    </article>
  )
}

PersonProfile.propTypes = {
  people: PropTypes.array.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  setHiredPeople: PropTypes.func.isRequired,
};

export default PersonProfile
