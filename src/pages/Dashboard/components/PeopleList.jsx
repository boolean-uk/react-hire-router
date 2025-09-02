import PeopleListItem from './PeopleListItem'

function PeopleList({people, goToProfile}) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} goToProfile={goToProfile} />
      ))}
    </ul>
  )
}

export default PeopleList
