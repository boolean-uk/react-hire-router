import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, canEdit } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} canEdit={canEdit} />
      ))}
    </ul>
  )
}

export default PeopleList
