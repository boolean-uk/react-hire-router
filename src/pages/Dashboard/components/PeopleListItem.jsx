import { Link, useNavigate } from 'react-router-dom'

function PeopleListItem(props) {
  const person = props.person
  const navigate = useNavigate()
  // console.log(person)

  return (
    <li>
      {person.wage == null ?
        <Link to={`/view/${person.id}`}>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
        </Link>
        :
        <>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
          <p>Wage: £{person.wage}</p>
          <button
            onClick={() => navigate(`/edit/${person.id}`)}>edit</button>
        </>
      }
    </li>
  )
}

export default PeopleListItem
