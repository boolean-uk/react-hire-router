import PeopleListItem from './PeopleListItem'
/* eslint react/prop-types:0 */ 
function PeopleList(props) {
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} id={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
