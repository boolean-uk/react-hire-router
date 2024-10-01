/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function PeopleListItem({person}) {
  return (
    <li>
      <Link to={`/view/${person.login.uuid}`}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
  </li>
  )
}
