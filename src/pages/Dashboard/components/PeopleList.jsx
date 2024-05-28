import PeopleListItem from './PeopleListItem'
import PropTypes from 'prop-types'

function PeopleList(props) {
  // Destructuring props to access people
  const { people } = props

  return (
    <ul>
      {/* Mapping over the 'people' array and rendering a PeopleListItem for each person */}
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList

// PropTypes for type-checking
PeopleList.propTypes = {
  people: PropTypes.array.isRequired // Array of people data
}
