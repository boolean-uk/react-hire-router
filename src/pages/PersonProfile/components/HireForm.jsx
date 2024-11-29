import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function HireForm(props) {
  const [wage, setWage] = useState(null)
  const navigate = useNavigate()

  if(props.person.wage !== undefined && wage === null){
    setWage(props.person.wage)
  } else if (wage === null){
    setWage(0)
  }
  
  //console.log(props.person)

  function handleSubmit(event) {
    event.preventDefault()
  
    const isAlreadyHired = props.hiredPeople.some(hiredPerson => hiredPerson.id === props.person.id)
  
    if (!isAlreadyHired) {
      const personWithWage = { ...props.person, wage: parseFloat(wage) };
      props.setHiredPeople([...props.hiredPeople, personWithWage]);
  
      // Remove the hired person from the people array
      const updatedPeople = props.people.filter(person => person.id !== props.person.id);
      props.setPeople(updatedPeople);
    } else {
      // If the person is already hired, update their wage
      const updatedHiredPeople = props.hiredPeople.map(hiredPerson => {
        if (hiredPerson.id === props.person.id) {
          // Update the wage of the hired person
          return { ...hiredPerson, wage: parseFloat(wage) }
        }
        return hiredPerson;
      });
      props.setHiredPeople(updatedHiredPeople);
      console.log("Wage updated successfully.");
    }
  
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">{props.person.wage !== undefined?  "edit" : "hire"}</button>
    </form>
  )
}

HireForm.propTypes = {
  person: PropTypes.object.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  setHiredPeople: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired,
  setPeople: PropTypes.func.isRequired
}

export default HireForm
