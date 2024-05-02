import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const { person, hiredPeople, setHiredPeople } = props

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()

    //lägg till wage som property när man trycker på Hire. Endast synlig i hiredPeople listan
    const personWithWage = { ...person, wage: wage };

    //lägg till person i hiredPeople
    setHiredPeople([...hiredPeople, personWithWage])

    //navigera till dashboard
    navigate('/');
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
