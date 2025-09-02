import React from "react"
import { Link } from "react-router-dom"

function PeopleListItem(props) {



  return (
    <li>
      <Link to={`/view/${props.person.login.uuid}`}>
        <h3>
          {props.person.name.first} {props.person.name.last}
        </h3>
          {props.person.wage && <p>Wage: £{props.person.wage}</p>}
      </Link>
      
    </li>
  )
}

export default PeopleListItem
