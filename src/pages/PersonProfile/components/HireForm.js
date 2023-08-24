
import { useNavigate } from "react-router-dom"

function HireForm(props) {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    console.log(props.person)

    props.setHiredPeople((hiredPeople)=>[...hiredPeople, props.person])
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
