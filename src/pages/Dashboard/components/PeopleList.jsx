import PeopleListItem from './PeopleListItem'

// eslint-disable-next-line react/prop-types
function PeopleList({people, hired}) {

  return (
    <ul>
      {/* eslint-disable-next-line react/prop-types*/}
      {people.map((person) => (
        <PeopleListItem key={person.email} person={person} hired={hired} />
      ))}
    </ul>
  )
}

export default PeopleList
