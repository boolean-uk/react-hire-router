import { Link } from 'react-router-dom';

function PeopleListItem(props) {
  const { person, people } = props

  return (
    <li>
      <h3>
        <Link to={`/people/${person.login.uuid}`} state={{person, people}}>
        {person.name.first} {person.name.last} 
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem