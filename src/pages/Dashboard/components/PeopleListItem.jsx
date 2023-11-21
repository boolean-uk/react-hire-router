import {Link} from 'react-router-dom'

function PeopleListItem({ person, isHiredList }) {
  return (
    <li>
      <h3>
        <Link to={`/people/${person.id.value}`} state={{person}}>
          {person.name.first} {person.name.last}
        </Link>
        { isHiredList && (<Link to={`/people/${person.id.value}/edit`} state={{person}}>
          edit
        </Link>)}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem