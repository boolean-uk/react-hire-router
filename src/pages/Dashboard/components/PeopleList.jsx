import PeopleListItem from './PeopleListItem'
import PropTypes from "prop-types"

function PeopleList({ people }) {

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} id={index} />
      ))}
    </ul>
  )
}

PeopleList.propTypes = { 
	people: PropTypes.array.isRequired,
}


export default PeopleList
