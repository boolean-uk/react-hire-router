/* eslint-disable react/prop-types */

import PeopleListItem from './PeopleListItem'

export default function PeopleList({people}) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

