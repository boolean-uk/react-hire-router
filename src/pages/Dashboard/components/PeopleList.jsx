import PeopleListItem from './PeopleListItem';

function PeopleList(props) {
  const { people } = props;

  return (
    <ul>
      {people.map((person) => (
        <PeopleListItem key={person.login.uuid} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;