import HiredPeopleListItem from './HiredPeopleListItem'

export default function PeopleList(props) {
  

  const people = props.people

  return (
    <ul>
      {people?.map((person, index) => (
        <HiredPeopleListItem key={index} person={person}/>
      ))}
    </ul>
  );
}
