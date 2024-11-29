import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props
  //console.log("the list @ people_list:", people)

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} people={people}/>
      ))}
    </ul>
  )
}

export default PeopleList