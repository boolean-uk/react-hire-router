import PeopleListItem from './PeopleListItem'

function PeopleList( { people, hiredList }) {

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} hiredList={hiredList} />
      ))}
    </ul>
  )
}

export default PeopleList
