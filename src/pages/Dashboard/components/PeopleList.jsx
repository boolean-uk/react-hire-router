import PeopleListItem from './PeopleListItem'

export default function PeopleList(props) {
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}
