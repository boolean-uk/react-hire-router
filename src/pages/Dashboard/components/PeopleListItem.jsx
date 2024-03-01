import PropTypes from "prop-types";
import { Routes, Route, Link } from 'react-router-dom'
import PersonProfile from "../../PersonProfile";


function PeopleListItem(props) {
  const { person, hired } = props

  return (
    <li>
      <h3>
      <Link to={`/view/${person.login.uuid}`}>{person.name.first} {person.name.last} </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {hired && 
      <Link 
        to={`/edit/${person.login.uuid}`}>
        <button>
          Edit
        </button> 
      </Link>}
    </li>
  )
}

PeopleListItem.propTypes = {
  person: PropTypes.object.isRequired,
  hired: PropTypes.bool.isRequired
}

export default PeopleListItem
