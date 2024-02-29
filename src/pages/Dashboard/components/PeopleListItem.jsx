import {Link} from 'react-router-dom'

function PeopleListItem(props) {
  const { person, id } = props

  return (
    <>{!person.wage ? 
    (
      <li>
      <Link to={`view/${id}`}>
        {person.name.first} {person.name.last}
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
    ) : 
    (<li>
      <p>{person.name.first} {person.name.last}</p>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`edit/${id}`}>
        <button>Edit {person.name.first}</button>
      </Link>
      </li>
    )
    }

    </>
  )
}

export default PeopleListItem
