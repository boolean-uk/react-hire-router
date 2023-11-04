
import { useEffect, useState, Link } from "react"
import { useLocation, useNavigate} from "react-router-dom"
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  const navigate = useNavigate()

  const location = useLocation()

  useEffect(() => {
    if (location.state) {
      setPerson(location.state.data)
    }
  }, [location])
 
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate('/')}>Go to Dashboard</button>
    </article>
  )
}

export default PersonProfile
