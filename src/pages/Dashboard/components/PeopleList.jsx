import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, editCallback } = props

  return (
    <ul>
      {people.map((person, index) => 
        (<PeopleListItem key={index} person={person} editCallback={editCallback} />)
      )}
    </ul>
  )
}

export default PeopleList
