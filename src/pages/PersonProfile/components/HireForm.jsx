import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const {person, hiredPeople, setHiredPeople, edit, setEdit} = props
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    let personCheck = hiredPeople.find((p) => Number(p.id) === Number(person.id))
    if(!edit)
    {
      if(personCheck)
      {
        console.log("already hired")
        navigate("/");
      }
      else
      {
        let tempPerson = person
        tempPerson.wage = wage;
        setHiredPeople([...hiredPeople, tempPerson])
        console.log(hiredPeople)
        navigate("/");
      }
    }
    else
    {
      let tempPerson = person
      tempPerson.wage = wage;
      let _hiredPeople = [...hiredPeople];
      _hiredPeople = _hiredPeople.filter(
        (p) => p.id !== person.id
      );
      setHiredPeople([..._hiredPeople, tempPerson])
      setEdit(false)
      navigate("/");
    }
    
    
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
      <button type="submit" onClick={handleSubmit}>Hire</button>
    </form>
  )
}

export default HireForm
