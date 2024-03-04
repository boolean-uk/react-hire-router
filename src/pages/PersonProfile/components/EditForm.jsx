import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function EditForm({person, hirePerson}) {
  const [wage, setWage] = useState(0)

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    person.wage=wage

    navigate("/")
    
  }

  return (<>
    <p>Edit</p>
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Edit Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
    </>
  )
}

export default EditForm
