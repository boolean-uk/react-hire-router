/* eslint-disable react/prop-types */ 

import { Link } from 'react-router-dom'
import PeopleListItem from './PeopleListItem'

function PeopleList({ people }) {

  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}> 
          <PeopleListItem key={index} person={person} />
          <Link to={`/view/${index}`}>Profile</Link>
        </li>
        
      ))}
    </ul>
  )
}

export default PeopleList
