/* eslint-disable react/prop-types */
import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props

  if (!people) {return <h1>Loading...</h1>}
  
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
