import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const {person, hiredPeople, setHiredPeople} = props
  const navigate = useNavigate()


  function handleSubmit(event) {
    event.preventDefault()
  }
  const hiredPerson = {...person, wage: wage }

const isClone = hiredPeople.some(person => 
  person.id.name === hiredPerson.id.name
)




if (isClone) {
  // Handle if the person is already hired
  setMessage('This person is already hired!');
} else {
  setHiredPeople([...hiredPeople, hiredPerson]);
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
      <button type="submit">Hire</button>
    </form>
  )
  }

export default HireForm
