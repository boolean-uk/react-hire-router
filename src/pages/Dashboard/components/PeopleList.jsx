import PeopleListItem from './PeopleListItem';

function PeopleList({ people }) {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.login.uuid}>
          <PeopleListItem person={person} />
        </li>
      ))}
    </ul>
  );
}

export default PeopleList;



