/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(7)

  // const params = useParams()
  // const { name } = params
  const { hiredPeople, setHiredPeople , person } = props
  

  const navigate = useNavigate()




  function handleSubmit(event) {
    event.preventDefault()
    const wageOffer = event.target[0].value
    person.wage = wageOffer
    setHiredPeople([...hiredPeople, person])
    navigate('/dashboard')

  }


  const goHomePage = () => {
    console.log('this is the back button')
    navigate(-1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button> <br />
    </form>
    
    <button onClick={goHomePage}> back </button>

    </div>
  )
}

export default HireForm
