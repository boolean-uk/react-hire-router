import { Link, useNavigate } from "react-router-dom"
import './style.css'

function PeopleListItem(props) {
  const { person } = props
  let navigate = useNavigate()

  return (
    <li className="people-list-item">
      <img src={person.picture.thumbnail} />
      <h3 className="people-list-item-child">
        {person.name.first} {person.name.last}
      </h3>
      <Link className="people-list-item-child" to={`/view/${person.login.uuid}`} > Profile </Link>
      {person.wage && 
      <>
        <p className="people-list-item-child">Wage: £{person.wage}</p>
        <button onClick={() => navigate(`/view/${person.login.uuid}/edit`)}>Edit</button>
      </>
      }
    </li>
  )
}

export default PeopleListItem
