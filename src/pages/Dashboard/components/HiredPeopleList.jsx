import HiredPeopleListItem from './HiredPeopleListItem'

function HiredPeopleList(props) {
  const { people, setEdit } = props

  return (
    <ul>
      {people.map((person, index) => (
        <HiredPeopleListItem key={index} person={person} setEdit={setEdit} />
      ))}
    </ul>
  )
}

export default HiredPeopleList
