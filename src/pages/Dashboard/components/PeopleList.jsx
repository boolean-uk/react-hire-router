import PeopleListItem from './PeopleListItem'

function PeopleList( properties ) {
  const { people } = properties


  return (
    <ul>
      {
        people.map((person, index) => (
          <PeopleListItem key={index} person={person} />
        ))
      }
    </ul>
  )
}

export default PeopleList
