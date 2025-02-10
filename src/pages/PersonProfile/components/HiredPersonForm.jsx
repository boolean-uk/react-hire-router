import { useState } from 'react'

function HiredPersonForm(props) {
  const hireHandler = props.hireHandler
  const person = props.person

  const [wage, setWage] = useState(person.wage)

  function handleSubmit(event) {
    event.preventDefault()
    hireHandler(wage)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">New wage</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button
        type="submit">Update wage</button>
    </form>
  )
}

export default HiredPersonForm
