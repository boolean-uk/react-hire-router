import { useContext } from 'react'
import PeopleListItem from './PeopleListItem'

import { AppContext } from '../../../App'

function PeopleList() {
  const { hiredPeople } = useContext(AppContext)

  return (
    <>
      <ul>
        {hiredPeople.map((person, index) => (
          <PeopleListItem key={index} person={person} />
          ))}
      </ul>
    </>
  )
}

export default PeopleList
