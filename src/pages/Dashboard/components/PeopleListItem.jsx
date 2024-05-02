import { Link, useNavigate } from "react-router-dom"

function PeopleListItem({ person, editButton }) {
  const navigation = useNavigate()
  function handleClick() {
    navigation(`/edit/${person.index}`)
  }

  return (
    <li>
      <Link to={`/view/${person.index}`}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        {person.wage && <p>Wage: £{person.wage}</p>}
      </Link>
      {editButton && <button onClick={handleClick} >Edit</button>}
    </li>
  )
}

export default PeopleListItem
