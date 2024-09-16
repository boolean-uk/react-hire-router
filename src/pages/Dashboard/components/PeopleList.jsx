import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, hired } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} hired={hired} />
      ))}
    </ul>
  )
}

export default PeopleList
