import PeopleListItem from "./PeopleListItem"
import { forwardRef } from 'react'

const PeopleList = forwardRef((props, ref) => {
  const { people } = props

  return (
    <ul className='peopleList' ref={ref} >
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
})

export default PeopleList
