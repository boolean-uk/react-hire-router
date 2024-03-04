import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props
  
    return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${props.index}`}>View</Link>
    </li>
  )
}

export default PeopleListItem
