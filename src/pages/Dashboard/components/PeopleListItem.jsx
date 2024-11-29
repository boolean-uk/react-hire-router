import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  // no wage included in the api data...

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && (
        <div>
          <p>Wage: £{person.wage}</p>
          <Link to={`/edit/${person.login.md5}`}>Edit</Link>
          <p></p>
          <Link to={`/view/${person.login.md5}`}>View Profile</Link>
        </div>
      )}

      {!person.wage && (
        <Link to={`/view/${person.login.md5}`}>View Profile</Link>
      )}
    </li>
  );
}

export default PeopleListItem;
