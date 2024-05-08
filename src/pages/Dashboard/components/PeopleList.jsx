/* eslint-disable react/prop-types */
import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  // eslint-disable-next-line react/prop-types
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} index={index}/>
      ))}
    </ul>
  )
}

export default PeopleList
