import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person, editCallback} = props

  const hasEditCallback = () => 
  {
    if(editCallback)
      return (
        <Link to={`/edit/${person.login.username}`} 
        style={{float:"left", padding: "2.5px", color:"Pink", backgroundColor:"magenta",borderRadius:"25%",marginRight:"5px"}} >
          Edit
        </Link>
      )
  }

  return (
    <li>
      {hasEditCallback()}
      <Link to={`/view/${person.login.username}`} >
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        {person.wage != null ? person.wage : ""  && <p>Wage: £{person.wage}</p>}
      </Link>
    </li>
  )
}

export default PeopleListItem
