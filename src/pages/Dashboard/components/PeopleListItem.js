import { Link, useNavigate } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props
  const navigate = useNavigate()

  return (
    <li key={person.login.uuid}>
      {
        person.wage === undefined &&
        <h3>
          <Link to={`view/${person.login.uuid}`} state={{person}}>
            {person.name.first} {person.name.last}
          </Link>
        </h3>
      }
      {
        person.wage>=0 && 
        <div className="hired-person-element">
          <h3 className="hired-person-name">{person.name.first} {person.name.last}</h3>
          <p className="hired-person-wage">Wage: £{person.wage}</p>
          <button className="hired-person-edit" type="button" onClick={() => navigate(`/view/${person.login.uuid}`, {state:{person}})}>Edit</button>
        </div>
      }
    </li>
  )
}

export default PeopleListItem
