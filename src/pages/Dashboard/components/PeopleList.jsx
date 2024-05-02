import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, editable } = props
  return (
    <ul>
      {people?.map((person, index) => (
        <PeopleListItem editable={editable} key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
