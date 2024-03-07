function PeopleListItem(props) {

  const { person, onHire, onView } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last} <br /> Wage: £
        {person.wage || "0"}
      </h3>
      <button onClick={() => onHire(person)}>Hire</button>
      <button onClick={() => onView(person.login.uuid)}>View Profile</button>
    </li>
  );
}

export default PeopleListItem;