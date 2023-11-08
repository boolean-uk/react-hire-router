
import { useEffect, useState, Link } from "react"
import { useLocation, useNavigate, useParams} from "react-router-dom"
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  const {hiredPeople, setHiredPeople, people} = props

  const navigate = useNavigate()

  const location = useLocation()

  const {personId} = useParams()
  
  // useEffect(() => {
  //   if (location.state) {
  //     setPerson(location.state.data)
  //   }
  // }, [location])

  // console.log(personId, people)
 
  useEffect(() => {
    if (!personId){
      return
    }
    const foundStudent = people.find((p) => p.id.value === personId)
    console.log(foundStudent)
    setPerson(foundStudent)
  }, [personId, people])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate('/')}>Go to Dashboard</button>
    </article>
  )
}

export default PersonProfile
