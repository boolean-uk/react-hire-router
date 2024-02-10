import { useContext } from 'react'
import AppContext from '../../../context/AppContext'
import PeopleListItem from './PeopleListItem'

function PeopleList() {
  const { people } = useContext(AppContext)

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
