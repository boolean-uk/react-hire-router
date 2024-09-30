import { Link } from "react-router-dom";

export default function PeopleListItem({
  person,
  people,
  setPeople,
  editable,
}) {
  const firePerson = () =>
    setPeople(
      people.filter(
        (hiredPerson) => hiredPerson.login.uuid !== person.login.uuid,
      ),
    );

  return (
    <li>
      <Link to={"/view/" + person.login.uuid}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
      </Link>
      {person.wage !== undefined && <p>Wage: £{person.wage}</p>}
      {editable && <button onClick={firePerson}>fire</button>}
    </li>
  );
}
