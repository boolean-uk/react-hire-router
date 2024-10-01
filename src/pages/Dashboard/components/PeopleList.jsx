import PeopleListItem from './PeopleListItem'
import PropTypes from 'prop-types';

function PeopleList({people, edit}) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} edit={edit} />
      ))}
    </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array,
  edit: PropTypes.bool
}

export default PeopleList
