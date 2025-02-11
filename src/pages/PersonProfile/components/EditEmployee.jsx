import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from "prop-types";


function EditEmployee({hiredPeople, setHiredPeople, people}) {
  const [wage, setWage] = useState(0)
  const [hired, setHired] = useState(false)
  const [person, setPerson] = useState(null)
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()


  const { id } = useParams();

  const navigate = useNavigate();



useEffect(() => {
    if(people && id){
        const matchingPerson = people.find((person) => {
          return Number(people.indexOf(person)) === Number(id)
        })
        setPerson(matchingPerson)
    }

  }, [people, id])

  if (!person) return <p>Loading...</p>


  function handleSubmit(event){
    event.preventDefault()
    
    person.name.first = firstName
    person.name.last = lastName
    person.wage = wage
    navigate('/');

  }
  
  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        onChange={e => setFirstName(e.target.value)}
        value={firstName}
      />
      <label htmlFor="Lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        onChange={e => setLastName(e.target.value)}
        value={lastName}
      />
      <label htmlFor="Wage">Wage</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Edit</button>
    </form>
  )
}

export default EditEmployee
EditEmployee.propTypes = {
  setHiredPeople: PropTypes.func,
  hiredPeople: PropTypes.array,
  person: PropTypes.object
};