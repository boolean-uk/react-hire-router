import PeopleListItem from './PeopleListItem'

function PeopleList(props) {

  return (
    <ul>
      {props.people.map((person, index) => (
        <PeopleListItem key={index} person={person} people={props.people} />
      ))}
    </ul>
  )
}

export default PeopleList
