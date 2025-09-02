import { Link, useNavigate } from "react-router-dom"
import './HiredListItem.css'
import { Navigate } from "react-router-dom"

function HiredListItem(props) {
  const { person } = props
  const nav = useNavigate()

  const handleNavigate = () => {nav(`/view/${person.login.uuid}`)}

  return (
    <li className="hired-list-item">
      <h3>
      {person.name.first} {person.name.last}
      <img src={person.picture.thumbnail}></img>
      <button className="editButton" onClick={handleNavigate}>Edit</button>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default HiredListItem
