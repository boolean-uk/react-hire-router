import { Link, useNavigate } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  const Navigate = useNavigate();
  const Edit = () => {
    Navigate("view/b7c8aff5-c1bc-41b9-af43-b833771b20e3");
  };

  return (
    <li>
      <h3>
        <Link to={`/view/${person.login.uuid}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${person.login.uuid}`}>
        {person.wage && <button>Edit</button>}
      </Link>
    </li>
  );
}

export default PeopleListItem;
