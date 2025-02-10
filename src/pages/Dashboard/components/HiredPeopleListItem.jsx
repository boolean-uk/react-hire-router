import { Link, useNavigate } from "react-router-dom";
function HiredPeopleListItem(props) {
  const { person, setEdit } = props
  const navigate = useNavigate()

  function handleSubmit()
  {
    setEdit(true)
    navigate(`/view/${person.id}`)
  }
  return (
    <li>
      <h3>
          {person.name.first} {person.name.last}
      </h3>
      {<p>Wage: £{person.wage} 
      <button type="submit" onClick={handleSubmit}>Edit</button></p>}
    </li>
  )
}

export default HiredPeopleListItem
