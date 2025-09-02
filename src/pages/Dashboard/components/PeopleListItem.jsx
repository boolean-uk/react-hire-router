import { Link, useNavigate } from "react-router-dom"


/* eslint-disable react/prop-types */
function PeopleListItem(props) {
  const { person } = props
  const navigate = useNavigate()

  return (
    <li className="person-li">
      <Link to={`/people/${person.login.uuid}`} className="flex-row">
        <img src={person.picture.medium} alt= {person.name.first + " " + person.name.last} />
        <div>
          <h3>
            {person.name.title} {person.name.first} {person.name.last}
          </h3>
          {person.wage && <p>Wage: £{person.wage}</p>}
        </div>
      </Link>
      {person.wage && <button onClick={()=> navigate(`/edit/${person.login.uuid}`)}>Edit</button>}
    </li>
  )
}

export default PeopleListItem
