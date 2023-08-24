import PeopleListItem from "./PeopleListItem"
import { Link } from "react-router-dom"


function PeopleList(props) {
  const { people } = props
  // console.log(people[0])

  return (
    <ul>
      {people.map((person, index) => (
        <Link key={index} to={`/view/${index}`} state={{person}}>
          <PeopleListItem key={index} person={person} />
        </Link>
      ))}
    </ul>
  )
}

export default PeopleList
