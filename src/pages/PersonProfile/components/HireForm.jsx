import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(0)

  const {person}=props

  const {setHiredPeople}=props

  const navigate=useNavigate()


  function handleSubmit(event) {
    event.preventDefault()
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
      <button 
        type="submit"
        onClick={()=>{setHiredPeople(prev => [...prev, person]) 
        navigate("../dashboard")}}>
          
          Hire

      </button>
    </form>
  )
}

export default HireForm
