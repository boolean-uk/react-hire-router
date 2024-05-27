import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function HireForm({ person, setHiredPeople, hiredPeople }) {
  // State for the wage offer
  const [wage, setWage] = useState(0)
  
  // Hook for navigation
  const navigate = useNavigate()

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault()
  
    // Check if the wage is at least 1
    if (wage < 1) {
      console.log("wage must be at least 1")
      return  
    }
  
    // Check if the person is already hired
    if (hiredPeople.find(hiredPerson => hiredPerson.id === person.id)) {
      // Update wage if person is already hired
      setHiredPeople(hiredPeople.map(hiredPerson => {
        if (hiredPerson.id === person.id) {
          return { ...hiredPerson, wage }
        }
        return hiredPerson
      }))
    } else {
      // Add person to hiredPeople array with wage
      setHiredPeople([...hiredPeople, { ...person, wage }])
    }
    
    // Navigate back to home page after submission
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Conditional label based on whether person is already hired */}
      {hiredPeople.find(hiredPerson => hiredPerson.id === person.id) ? 
        <label htmlFor="wage">Edit Offer</label> :
        <label htmlFor="wage">Wage Offer</label>
      }
      {/* Input field for wage offer */}
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      {/* Submit button */}
      <button type="submit">Hire</button>
    </form>
  )
}

// PropTypes for type-checking
HireForm.propTypes = {
  person: PropTypes.object.isRequired, // Object representing the person
  setHiredPeople: PropTypes.func.isRequired, // Function to set the list of hired people
  hiredPeople: PropTypes.array.isRequired, // Array of hired people
}

export default HireForm
