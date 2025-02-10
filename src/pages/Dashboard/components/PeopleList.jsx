import PeopleListItem from './PeopleListItem'

export default function PeopleList(props) {
  

  const people = props.people

  return (
    <ul>
      {people?.map((person, index) => (
        <PeopleListItem key={index} person={person}/>
      ))}
    </ul>
  );
}
