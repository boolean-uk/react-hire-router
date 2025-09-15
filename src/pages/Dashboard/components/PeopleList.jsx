import PeopleListItem from './PeopleListItem'
import { Link } from "react-router-dom";

function PeopleList({people}) {

  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>
          <Link to={`/view/${index}`}>
            <PeopleListItem person={person} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PeopleList
