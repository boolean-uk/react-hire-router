/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({person, setHiredPeople, hiredPeople}) {
  const [personWage, setWage] = useState(0)
  const navigate = useNavigate()

  const goHome = () => navigate('/')

  function handleSubmit(event) {
    event.preventDefault()
    // console.log(person)
    setHiredPeople([...hiredPeople, {...person, wage: personWage}])
    goHome()
    // console.log("hired people state",hiredPeople)
    // console.log("wage",personWage)
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={personWage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
