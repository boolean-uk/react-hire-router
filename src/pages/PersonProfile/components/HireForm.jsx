/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HireForm(props) {
  const {person, setHiredPeople, hiredPeople} = props
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    // see by index if person is hired
    const personIndex = hiredPeople.findIndex((i) => i.id === person.id)

    if (personIndex !== -1){
      // if person is hired, update their wage from form
      const hiredPeopleUpdated = [...hiredPeople]
      hiredPeopleUpdated[personIndex].wage = wage
      setHiredPeople(hiredPeopleUpdated)
    } else {
      // if person is not hired, add them to hiredPeople list
      setHiredPeople((oldHired) => [...oldHired, {...person, wage}])
    }
    // return to dashboard
    navigate("/")
  }

  // set initial default wage on load
  useEffect(()=> {
    setWage(person.wage || 0)
  }, [person.wage])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
