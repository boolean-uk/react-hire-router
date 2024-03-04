import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, onHire, onView } = props;

  return (
    <ul>
      {people.map((person) => (
        <PeopleListItem
          key={person.login.uuid}
          person={person}
          onHire={() => onHire(person)}
          onView={() => onView(person.login.uuid)}
        />
      ))}
    </ul>
  );
}

export default PeopleList
