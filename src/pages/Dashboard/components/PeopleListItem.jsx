import { Link } from "react-router-dom";

function PeopleListItem({ person }) {
  // Extract title from person.name.title and gender directly from person
  const { name, gender } = person;

  return (
    <li>
      <h3>
        {name.first} {name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link
        to={{
          pathname: `/people/${person.id.value}`,
          state: {
            firstName: name.first,
            lastName: name.last,
            title: name.title, // Access title from the name object
            gender: gender // Access gender directly from the person object
          }
        }}
      >
        View Profile
      </Link>
    </li>
  );
}

export default PeopleListItem;
