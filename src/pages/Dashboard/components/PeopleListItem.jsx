import { Link } from 'react-router-dom'

function PeopleListItem({ person }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h3 className="h5 mb-1">{person.name.first} {person.name.last}</h3>
        {person.wage && <p className="text-muted mb-0">Wage: £{person.wage}</p>}
      </div>
      {person.wage ? (
        <Link to={`/edit/${person.id}`} className="btn btn-outline-primary btn-sm">Edit</Link>
      ) : (
        <Link to={`/view/${person.id}`} className="btn btn-primary btn-sm">View Profile</Link>
      )}
    </li>
  )
}

export default PeopleListItem
