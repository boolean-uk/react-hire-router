import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import EditForm from "./components/EditForm"

function EditPersonProfile({ hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if(location.state){
      setPerson(location.state.person)
    }
  },[location])

  const editPerson = (wage) => {
    person.wage = wage
    const updatedHiredPeople = hiredPeople.filter((hiredperson) => hiredperson.login.uuid !== person.login.uuid)
    setHiredPeople([...updatedHiredPeople, person])
    navigate('/')
  }

  if (!person) return <p>Loading...</p>

  console.log()

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
     <EditForm person={person} editPerson={editPerson} currentWage={person.wage} />
    </article>
  )
}

export default EditPersonProfile
