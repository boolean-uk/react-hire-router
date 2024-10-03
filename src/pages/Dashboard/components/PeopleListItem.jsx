/* eslint-disable react/prop-types */
import '../../../App.css'
import {Link} from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props

  return (
    <li className="people-list">
      <Link 
      to={`/view/${person.login.uuid}`}
      state={{person}}
      >
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      </Link>
      <img src={person.picture.medium}/>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {person.hired && <strong>Hired! </strong>}
      <p>{person.email}</p>
      <p>{person.location.country}</p>
    </li>
  )
}

export default PeopleListItem
