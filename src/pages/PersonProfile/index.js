import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import HireForm from "./components/HireForm"

function PersonProfile({ updateHiredPeople }) {
  const [person, setPerson] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.state) {
      setPerson(location.state.person)
    }
  }, [])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} updateHiredPeople={updateHiredPeople} />
    </article>
  )
}

export default PersonProfile
