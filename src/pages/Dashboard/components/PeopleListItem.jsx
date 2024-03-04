import {Routes, Route, Link } from "react-router-dom";
import PersonProfile from "../../PersonProfile";

function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
        {person.wage && <p>Wage: £{person.wage}</p>}     
      <Link to={`/view/${person.login.uuid}`}>{person.wage ? "Edit" : "View Person"}</Link> 
    </li>
  )
}

export default PeopleListItem
