import { Link, useNavigate } from "react-router-dom"
import './PeopleListItem.css'
import { Navigate } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props
  const nav = useNavigate()

  const handleNavigate = () => {nav(`/view/${person.login.uuid}`)}

  return (
    <li className="people-list-item" onClick={handleNavigate}>
      <h3>
      <img src={person.picture.thumbnail}></img>
      {person.name.first} {person.name.last}
      <p className="email">{person.email}</p>
      </h3>
    </li>
  )
}

export default PeopleListItem
