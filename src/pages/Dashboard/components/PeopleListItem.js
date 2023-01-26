import { Route, Routes, Link } from "react-router-dom"
import PersonProfile from "./../../PersonProfile/index"

function PeopleListItem(props) {
  const { person } = props
 

  

  return (
    <>
    <li>
      <Link to={`/view/${person.login.uuid}`} state={person} setHiredPeople={props.setHiredPeople}> {person.name.first} {person.name.last}</Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {console.log("this is the index", person.login.uuid)}
    </li>
    </>
  )
}

export default PeopleListItem
