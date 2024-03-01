import PeopleListItem from './PeopleListItem'
import PropTypes from "prop-types";

function PeopleList(props) {
  const { people, hired } = props

  if (!people) return <p>Loading...</p>

  return (
    <ul>
      {people.map((person, index) => (
         <PeopleListItem key={index} person={person} hired={hired} />
      ))}
    </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
  hired: PropTypes.bool.isRequired
}
export default PeopleList
