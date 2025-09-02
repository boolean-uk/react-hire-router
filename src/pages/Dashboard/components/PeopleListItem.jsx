/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function PeopleListItem({ index, person, listType }) {

  // Hvis type er people og wage != null: vis
  // Hvis type er hired og wage = null: vis

  if (listType == "people" && person.wage == null || listType == "hired" && person.wage != null) {
    return (
      <li key={index}>
        <h3>
          <Link to={`/view/${index}`}>
            {person.name.first} {person.name.last}
          </Link>
        </h3>
        {person.wage && <p>Wage: ${person.wage}</p>}
      </li>
    )
  }
}

export default PeopleListItem
