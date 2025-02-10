import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props

   return (people.length > 0) ? (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  ) : <p>Currently no hires</p>
}

export default PeopleList
