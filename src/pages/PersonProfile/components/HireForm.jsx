import { useState } from 'react'

function HireForm(props) {
  const [wage, setWage] = useState(0)

  function manageSubmit(event) {
    event.preventDefault()
    // eslint-disable-next-line react/prop-types
    props.onHire(wage)
  }

  return (
    <form onSubmit={manageSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input 
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button  type="submit">Hire</button>
    </form>
  )
}

export default HireForm
