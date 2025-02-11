import PropTypes from "prop-types"
import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const people = props.people

  return (
    <ul>
      {people?.map((person, index) => (
        <PeopleListItem key={index} person={person} index={index}/>
      ))}
    </ul>
  )
}

export default PeopleList

PeopleList.propTypes = {
  results: PropTypes.array
}
