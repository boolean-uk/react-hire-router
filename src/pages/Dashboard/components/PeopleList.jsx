import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, isInHiredField } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem
          key={index}
          person={person}
          isInHiredField={isInHiredField}
        />
      ))}
    </ul>
  );
}

export default PeopleList
