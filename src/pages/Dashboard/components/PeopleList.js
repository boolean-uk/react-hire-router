import PeopleListItem from "./PeopleListItem"
import { Link } from "react-router-dom"


function PeopleList(props) {
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (

        < Link to={`view/${index}`}
          key={index}
          state={{ person,people }}
        // onClick={(() => console.log(person.name.first))}
        >

          <PeopleListItem
            person={person}
          />

        </Link>
      ))
      }
    </ul >
  )
}

export default PeopleList
