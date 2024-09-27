import PeopleListItem from './PeopleListItem'
import PropTypes from 'prop-types'

function PeopleList(props) {
  const { people, isHired = false } = props
  return (
    <ul>
      {people?.map((person, index) => (
        <PeopleListItem key={index} person={person} isHired={isHired}/>
      ))}
    </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array,
  isHired: PropTypes.bool,
}

export default PeopleList
