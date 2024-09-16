
/* eslint-disable react/prop-types */


import { Link } from 'react-router-dom';

function PeopleListItem(props) {
  const { person } = props

  const personURL = `/john/${person.name.first}`;
  return (
    <Link to={personURL}  state={person} >
    <li className='peoples-card'>
    <img src={person.picture.large} alt="" /> <br />
      <h3>
        name: {person.name.first} {person.name.last}
        
      </h3>
      {person.wage && <p className='wage'>Wage: £{person.wage}</p>}
    </li>
    </Link>
  
  )
}

export default PeopleListItem
