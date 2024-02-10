import { useContext } from 'react'
import PeopleListItem from './PeopleListItem'

import { AppContext } from '../../../App'

function PeopleList() {
  const { people } = useContext(AppContext)

  return (
    <>
      <ul>
        {people.map((person, index) => (
          <PeopleListItem key={index} person={person} />
        ))}
      </ul>
    </>
  )
}

export default PeopleList
