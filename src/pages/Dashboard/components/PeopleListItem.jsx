import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props
  const id = person.cell
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last} 
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link 
      to={`PersonProfile/view/${id}`}
      state={person}
      >More info</Link>
    </li>
  )
}

export default PeopleListItem
