import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const {hiredPeople, setHiredPeople, person} = props
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    //adding the current person to the hired people list with a wage value
    setHiredPeople([...hiredPeople, {...person, wage: wage}])
    console.log(hiredPeople)
    //route back to the home page
    navigate("/")
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
