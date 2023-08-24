import { Link } from "react-router-dom"
import PeopleListItem from "./PeopleListItem"

function PeopleList(props) {
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <Link to={`/view/${person.login.uuid}`} state={{person}}><PeopleListItem key={index} person={person} /></Link>
      ))}
    </ul>
  )
}

export default PeopleList
