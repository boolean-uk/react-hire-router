/* eslint-disable no-unused-vars */

import { Link, Route, Routes } from "react-router-dom"

/* eslint-disable react/prop-types */
function PeopleListItem(props) {
  const { person, id, hired } = props


  return (
    <>
      
        <li>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
          {person.wage && <p>Wage: £{person.wage}</p>}
        </li>
        {!hired ? <Link to={`/view/${id}`}><button>View</button></Link> : <Link to={`/view/${id}`}><button>Edit</button></Link>}
    </>
  )
}

export default PeopleListItem
