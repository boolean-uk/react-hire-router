import PeopleListItem from './PeopleListItem'

import PropTypes from 'prop-types'

PeopleList.propTypes = {
  people: PropTypes.array,
  ignoreHired: PropTypes.bool
}

export default function PeopleList({ people, ignoreHired }) {
  return (
    <ul>
      {people.map((person, index) => (
        <div key={index}>
          {(!ignoreHired || !person.hired) &&
          <PeopleListItem person={person} />
        }
        </div>
      ))}
    </ul>
  )
}
