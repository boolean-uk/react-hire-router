import { Link } from "react-router-dom"

function PeopleListItem({ person, handleEdit }) {
  const id = person.id.name + person.id.value

  return (
    <li>
      <Link to={`/view/${id}`} state={{ person }}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
      </Link>
      {person.wage && 
        <>
          <p>Wage: £{person.wage}</p>
          <Link to={`/view/${id}`} state={{ person }}>
            <button onClick={() => handleEdit(id)}>
              Edit
            </button>
          </Link>
        </>
      }
    </li>
  )
}

export default PeopleListItem
