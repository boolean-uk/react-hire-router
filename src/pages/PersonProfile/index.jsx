import PropTypes from "prop-types"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import HireForm from './components/HireForm'

function PersonProfile({people, setHiredPeople}) {
  const [person, setPerson] = useState(null)  
  let { id } = useParams();

  // Get person
  console.log(`People: `)
  console.log(people)

  useEffect(() => {
    setPerson(
      people.find(person => 
        person.login.uuid === id ?? undefined
        ))
    }, [id, people])


  // Check if person is valid
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.large} alt="Person Image" />
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <p>Age: {person.dob.age}</p>
      <HireForm person={person} setHiredPeople={setHiredPeople} />
    </article>
  )
}

PersonProfile.propTypes = { 
	people: PropTypes.array.isRequired, 
  setHiredPeople: PropTypes.func.isRequired,
}

export default PersonProfile
