import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'
import PropTypes from 'prop-types'

function PersonProfile({ people, setHirePeople, hiredPeople }) {
  // State for the individual person
  const [person, setPerson] = useState(null)

  // Retrieve the 'id' parameter from the URL
  const { id } = useParams()

  // Effect to set the person based on 'id' from the URL and 'people' prop
  useEffect(() => {
    if (people && id) {
      setPerson(people.find((person) => Number(person.id) === Number(id)))
    }
  }, [people, id])

  // Return loading message if person data is not yet available
  if (!person) return <p>Loading...</p>

  return (
    <article>
      {/* Display the name of the person */}
      <h2>
        {person.name.first} {person.name.last}
      </h2>

      {/* Pass props to the HireForm component */}
      <HireForm
        person={person}
        setPerson={setPerson}
        setHirePeople={setHirePeople}
        hiredPeople={hiredPeople}
      />
    </article>
  )
}

// PropTypes for type-checking
PersonProfile.propTypes = {
  people: PropTypes.array.isRequired, // Array of people data
  setHirePeople: PropTypes.func.isRequired, // Function to set hired people
  hiredPeople: PropTypes.array.isRequired, // Array of hired people
}

export default PersonProfile
