import { Link, useLocation } from "react-router-dom"
import PeopleListItem from "./PeopleListItem"
import { useState, useEffect } from "react"

function PeopleList(props) {
  const [person, setPerson] = useState(null)
  const location = useLocation()
  const { people } = props

  useEffect(() => {
    if (location.state) {
      setPerson(location.state.person)
    }
    
  },[location.state])
  
  return (
    <ul>
      {people.map((person, index) => (
        <Link to={`/view/${person.login.uuid}`} state={{person}}><PeopleListItem key={index} person={person} /></Link>
      ))}
    </ul>
  )
}

export default PeopleList
