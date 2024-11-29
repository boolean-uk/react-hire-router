import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()
  //console.log("hireform props:", props)
  let currentperson = props.person
  const { hiredPeople, setHiredPeople } = props.hirelist
  //const people = props.people
  //console.log("currentperson:",currentperson)
  //console.log("hired people @ hireform:", hiredPeople)
  //console.log("people @hireform:", people)

  // Hire person or update wage: 
  function handleSubmit(event) {
    let hired = 0
    event.preventDefault()
    console.log(currentperson.login.uuid)
    console.log(hiredPeople)
    
    for (let i=0; i<hiredPeople.length; i++) {
      if(hiredPeople[i].login.uuid === currentperson.login.uuid) {
        hired += 1
        console.log("Already hired, change wage:",wage)
        hiredPeople[i].wage = wage
      } 
    }

    if (hired === 0) {
      console.log("New hire:", currentperson, "Wage:", wage)
      currentperson.wage = wage
      setHiredPeople([...hiredPeople, currentperson])
    }
    navigate('/dashboard')
    }

  // Fire person:  
  function handleUnhire(event) {
    event.preventDefault()
    let arr = hiredPeople
    for (let i=0; i<arr.length; i++) {
      if (arr[i].login.uuid === currentperson.login.uuid) {
        console.log("match")
        arr.splice(i,1)
      }
    setHiredPeople(arr)
    }
    navigate('/dashboard')
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
      <button type="submit" onSubmit={handleSubmit}>Hire</button>
      <button type="click" onClick={handleUnhire}>Fire</button>
    </form>
  )
}

export default HireForm

// Navigating with Link - Hire function not working
//<Link to={'/dashboard'} state={people}><button type="submit" onSubmit={handleSubmit}>Hire and go back</button></Link>
//<Link onSubmit={handleSubmit} to='/dashboard'><button type='sumbit'> Submit and go back</button></Link>