/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
function PeopleListItem(props) {
  const { person, id, hired } = props;
  const navigate = useNavigate();
  return (
    <li>
      {!hired && (
        <h3>
          <Link to={`/view/${id}`}>
            {person.name.first} {person.name.last}
          </Link>
        </h3>
      )}

      {hired && (
        <>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
          {<p>Wage: £{person.wage}</p>}
          {<button onClick={() => navigate(`/edit/${id}`)}>Edit</button>}
        </>
      )}
    </li>
  );
}

export default PeopleListItem;
