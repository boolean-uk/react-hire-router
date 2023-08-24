import { useState, useEffect } from "react"
import HireForm from "./components/HireForm"
import { useLocation } from "react-router-dom"

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const location = useLocation()
  const { people } = props

  useEffect(() => {
    if (location.state) {
      setPerson(location.state.person)
    }
    
  },[location.state])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm people={people} />
    </article>
  )
}

export default PersonProfile
