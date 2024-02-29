import PeopleListItem from './PeopleListItem'
import PropTypes from 'prop-types'

PeopleList.propTypes = {
  peoples: PropTypes.array
}

function PeopleList(props) {
  const { peoples } = props
  //console.log(peoples);
  //console.log(peoples.length);

  return (
    <ul>
      {peoples.length > 0 && peoples && peoples.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
