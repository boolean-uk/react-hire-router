import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()
  const { person, hiredPeople } = props

  useEffect(() => {
    if (person.wage) {setWage(person.wage)}
    else {person.wage = 0}
    console.log(person.wage)
  },[])

  function handleSubmit(event) {
    event.preventDefault()
    console.log(hiredPeople.find(instance => instance.id.value !== person.id.value))
    props.setHiredPeople([...hiredPeople.filter((e) => e.id.value != person.id.value),person])
    props.person.wage = wage
    navigate("/dashboard")
    console.log(hiredPeople)
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
