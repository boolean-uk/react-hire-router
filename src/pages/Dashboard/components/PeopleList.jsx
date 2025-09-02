/* eslint-disable react/prop-types */
import PeopleListItem from './PeopleListItem'

function PeopleList({people, listType}) {

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} index={index} listType={listType}/>
      ))}
    </ul>
  )
}

export default PeopleList
