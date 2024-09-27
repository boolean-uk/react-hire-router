import PeopleListItem from './PeopleListItem'

function PeopleList({ people }) {

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}
import PropTypes from 'prop-types'
PeopleList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.object
  )
}

export default PeopleList
