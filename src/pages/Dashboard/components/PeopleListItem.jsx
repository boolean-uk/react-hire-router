import { Link } from "react-router-dom"
function PeopleListItem({person}) {

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && (
        <div className="details">
          <p>Wage: £{person.wage}</p>
        </div>
      )}
      

    </li>
  )
}

export default PeopleListItem

