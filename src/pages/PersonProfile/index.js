import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import HireForm from "./components/HireForm"

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const {hiredPeople, setHiredPeople, people, setPeople} = props
  const location = useLocation()

  useEffect(() => {
    if (location.state) {
      const { person } = location.state
      setPerson(person)
    }
  },[location])

  if (!person) return <p>Loading...</p>

  if (person.hired) return <p>You can't hire a person, who is already hired.<br/>Please review some of your other options.</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} people={people} setPeople={setPeople} />
    </article>
  )
}

export default PersonProfile
