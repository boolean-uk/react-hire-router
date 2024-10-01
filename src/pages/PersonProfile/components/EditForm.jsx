import { useState } from 'react'

function EditForm(props) {
  const [wage, setWage] = useState(0)
  const {person, onEdit}= props

  function handleSubmit(event) {
    event.preventDefault()

    onEdit(wage)
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">New Wage Offer</label>
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

export default HireForm
