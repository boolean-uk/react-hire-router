import { Link, useParams } from 'react-router-dom'
import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, isHired = false } = props
  //const {id} = useParams();
/*<Link to={`/view/${person.id}`}>View profile</Link>*/

//console.log(people)
  return (
    <ul>
      {people && 
      people.map((person, index) => {
        console.log(person)
        return <PeopleListItem key={index} person={person} isHired={isHired}/>
  })}
    </ul>
  )
}

export default PeopleList
