import { Routes, Route, Link } from "react-router-dom";

function PeopleListItem( {person} ) {
  
  return (
    <li>
      <img src={person.picture.large} />

      <Link to={`/View/${person.id}`}> {person.name.first} {person.name.last} </Link>
      
    </li>
  )
}

export default PeopleListItem;