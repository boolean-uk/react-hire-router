import { Link } from "react-router-dom"

function PeopleListItem(props) {
  
  
  const { person } = props
 

  return (
    <li key={person.id}>
      <h3>
      <Link state={{person}} to={`/view/${person.id.value}`}>{person.name.first}
      {person.wage && <p>Wage: £{person.wage}</p>} {person.name.last}</Link>
      </h3>
      
    </li>
  
  )
}

export default PeopleListItem
