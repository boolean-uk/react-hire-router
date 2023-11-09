import PeopleListItem from './PeopleListItem'

export default function PeopleList(props) {
  // eslint-disable-next-line react/prop-types
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}