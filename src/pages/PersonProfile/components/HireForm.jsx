import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HireForm(props) {
  console.log("Inside HireForm: ", { props });

  const { person, hiredPeople, setHiredPeople } = props;
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()  

  
  function handleSubmit(event) {
    event.preventDefault()

    const isNotHired = !hiredPeople.some(hiredPerson =>
      `${hiredPerson.name.first}${hiredPerson.name.last}` === `${person.name.first}${person.name.last}`)


    if (isNotHired) {
      setHiredPeople([...hiredPeople, { ...person, wage }])
      console.log(hiredPeople)
    } else {
      console.log("This person is already hired.")
    }
  
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
