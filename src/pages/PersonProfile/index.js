import { useState, useEffect } from "react"
import HireForm from "./components/HireForm"
import { useLocation, useNavigate, useParams } from "react-router"

function PersonProfile(props) {
  const [person, setPerson] = useState(props.person)
  const [hiredPeople, setHiredPeople] = useState([])
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  console.log("retrieve id", id)
 
  useEffect(() => {
    if (location.state) {
      setPerson(location.state.person)
    }
  }, [])

  if (!person) return <p>Loading...</p>

  const hiredPeopleList = () => {
    const hiredPerson = { ...person}
    props.setHiredPeople([ ...props.hiredPeople, hiredPerson ])
    console.log(hiredPeople)
    navigate('/dashboard')
  }

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.large}/>
      <p>Gender: {person.gender}</p>
      <p>Street:{person.location.street.name}  {person.location.street.number}</p>
      <p>City: {person.location.city}</p>
      <p>Country: {person.location.country}</p>
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <HireForm person={person} onHire={hiredPeopleList} />
    </article>
  )
}

export default PersonProfile
