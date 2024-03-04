/* eslint-disable react/prop-types */
import { useState } from 'react'
import PropTypes from "prop-types"

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const { person, hiredPeople, setHiredPeople, navigate } = props

  function handleSubmit(event) {
    event.preventDefault()

    setHiredPeople([...hiredPeople, {...person, wage: wage}])
    // TODO setPeople?
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

HireForm.propTypes = {
  person: PropTypes.object,
  hiredPeople: PropTypes.array,
  setHiredPeople: PropTypes.func,
}

export default HireForm
