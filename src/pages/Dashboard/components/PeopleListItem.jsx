import { Link } from "react-router-dom"


function PeopleListItem({person}) {

  //const { person } = props

  return (
    <li>

      <h3>
        {person.name.first} {person.name.last}
      </h3>
      
      {person.wage && <p>Wage: £{person.wage}</p>}

      <Link to={`/view/${person.name.first}`} state={person}> View More
      </Link>

      
    </li>
  )
}

export default PeopleListItem
