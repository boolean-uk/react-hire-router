
/* eslint-disable react/prop-types */

import PeopleListItem from './PeopleListItem'

function PeopleList({ people = [], link, remove, setHiredPeople}) {

  return (
    <>
    <ul className="no-bullets">
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} link={link} remove={remove} setHiredPeople={setHiredPeople}/>
      ))}
    </ul>
    </>
  )
}

export default PeopleList
