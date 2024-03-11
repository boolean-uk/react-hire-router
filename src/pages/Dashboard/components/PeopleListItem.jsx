import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function PeopleListItem(props) {
  const { person, index, edit } = props;
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    setUpdate(update + 1)
  }, [person]);

  if (!person) return <div>Loading...</div>;

  return (
    <li>
      <div>
        <Link to={`/view/${index}`}>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
        </Link>
        {person.wage && <p>Wage: £{person.wage}</p>}
        {edit && <Link to={`/edit/${person.id.value}`}>Edit</Link>}
      </div>
    </li>
  );
}

export default PeopleListItem;
