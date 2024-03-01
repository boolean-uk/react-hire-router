import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from "prop-types";

function Edit(props) {
  const { people, hiredPeople, setPeople, setHiredPeople } = props
  const {id} = useParams()
  const [person, setPerson] = useState(hiredPeople.find((p) => p.login.uuid === id))
  const navigate = useNavigate()

  if (!person) return <p>Person not found...</p>

  function handleSubmit(event) {
    event.preventDefault()
    people[people.findIndex(p => p.login.uuid === id)] = person
    setPeople([...people])
    hiredPeople[hiredPeople.findIndex(p => p.login.uuid === id)] = person
    setHiredPeople([...hiredPeople])
    navigate("/")
  }

  function handleChange(event) {
    const { name, value } = event.target
    setPerson({...person, [name]:value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <p>Edit profile for {person.name.first} {person.name.last}</p>
            <img 
                src={person.picture.medium} 
                alt={`Profile picture for ${person.name.first} ${person.name.last}`} 
            />
        </div>
        <div>
            <h3>Email</h3>
            <input 
                type="email"
                name="email"
                value={person.email}
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Phone Number</h3>
            <input 
                type="phone"
                name="phone"
                value={person.phone}
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Cell Number</h3>
            <input 
                type="cell"
                name="cell"
                value={person.cell}
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Wage</h3>
            <input 
                type="wage"
                name="wage"
                value={person.wage}
                onChange={handleChange}
            />
        </div>
        <div>
            <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

Edit.propTypes = {
    people: PropTypes.array.isRequired,
    hiredPeople: PropTypes.array.isRequired,
    setPeople: PropTypes.func.isRequired,
    setHiredPeople: PropTypes.func.isRequired
}

export default Edit