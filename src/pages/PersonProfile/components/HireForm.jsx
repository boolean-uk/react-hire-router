import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HireForm(props) {

  const [wage] = useState(0)

  const {person, hiredPeople, setHiredPeople} = props

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const hiredPerson = {...person, wage: wage}
    setHiredPeople([...hiredPeople, hiredPerson])
    navigate("/Dashboard")
  }
  console.log("hiredPeople=", hiredPeople)
  
  return (
    <form onSubmit={handleSubmit}></form>
  )
}

export default HireForm