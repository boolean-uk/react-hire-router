import { Link, Route, Routes } from "react-router-dom"
import { Person } from "../../../objects/PersonInfoObjects"
import PersonProfile from "../../PersonProfile"

function PeopleListItem(props : {person : Person}) {
  const { person } = props

  return (
    <li>
      
      <div className="container">
      <img src={person.picture.thumbnail}/>
      <Link to={`/profile/${person.login.uuid}`} >
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
      </div>
    </li>
    
  )
}

export default PeopleListItem
