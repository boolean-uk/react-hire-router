import PeopleListItem from './PeopleListItem'
import PropTypes from 'prop-types'

function PeopleList({ people }) {
  return (
    <ul>
      {people.map((person) => (
        <PeopleListItem key={person.login.uuid} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList

PeopleList.propTypes = {
  people: PropTypes.array
}
