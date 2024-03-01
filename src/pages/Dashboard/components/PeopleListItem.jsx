import { Route, Routes, Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;
  const url = "/view/" + props.keydata;
  const eurl = "/edit/" + props.keydata;

  if (person.wage == undefined) {
    return (
      <li>
        <Link to={url}>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
        </Link>
      </li>
    );
  }
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
       <p>Wage: £{person.wage}</p><Link to={eurl}>Edit</Link>
    </li>
  );
}

export default PeopleListItem;
