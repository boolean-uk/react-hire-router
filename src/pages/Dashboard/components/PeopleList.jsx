/* eslint-disable react/prop-types */
import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, hiredList} = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} hiredList={hiredList}/>
      ))}
    </ul>
  )
}

export default PeopleList
