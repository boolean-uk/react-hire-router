import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const {person, hiredPeople, setHiredPeople} = props
  const navigate = useNavigate()

  useEffect(() => {
    setWage(person.wage || 0)
  }, [person.wage])

  function handleSubmit(event) {
    event.preventDefault()

    const peopleIndex = hiredPeople.findIndex(p => p.id === person.id)

    if (peopleIndex !== -1) {
      const updateHiredPeople = [...hiredPeople]
      updateHiredPeople[peopleIndex].wage = wage
      setHiredPeople(updateHiredPeople)
    } else {
      setHiredPeople((prevHiredPeople) => [...prevHiredPeople, {...person, wage}])
    } 
    navigate('/')
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
