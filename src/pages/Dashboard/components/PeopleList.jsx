/* eslint-disable react/prop-types */
import PeopleListItem from './PeopleListItem'
import { Link } from "react-router-dom";


function PeopleList(props) {
  const { people } = props
  const results = people

  return (
    <ul style={{ listStyleType: 'space-counter', padding: 10 }}>
      {results.map((person, index) => (
        <div key={index}>
        <PeopleListItem person={person} />
        <Link to={`/view/${person.login.uuid}`}>
            <button> More info </button>
        </Link>
        </div>
      ))}
    </ul>
  )
}

export default PeopleList
