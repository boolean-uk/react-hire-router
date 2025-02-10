import { Link, Route, Routes } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props

  return (
    <li className="person">
      <h4>
        {person.name.first} {person.name.last}
      </h4>
      <div className="person-actions">
        <Link to={`/view/${person.id.value}`}>View Profile</Link>
      </div>
    </li>
    
  )
}

export default PeopleListItem
