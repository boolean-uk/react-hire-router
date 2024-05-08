/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function PeopleListItem(props) {
  const { person, index } = props
  const navigate = useNavigate();

  function handleClickEdit() {
    navigate(`/view/${index}/edit`, { state: { "person": person } })
  }

  return (<>

    <Link to={`/view/${index}`} state={{ "person": person }}>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </Link>
    {person.wage && <button onClick={handleClickEdit}>Edit</button>}
  </>
  )
}

export default PeopleListItem
