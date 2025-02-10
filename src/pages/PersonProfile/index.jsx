import { useParams, useNavigate } from 'react-router-dom'
import HireForm from './components/HireForm'
import Card from '../Dashboard/components/Card'
function PersonProfile({ people, onHire }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const person = people.find(p => p.id === parseInt(id))

  if (!person) return <p className="text-center">Loading...</p>

  const handleHire = (wage) => {
    onHire(person, wage)
    navigate('/')
  }

  return (
    <div className="mx-auto" style={{maxWidth: '500px'}}>
      <Card title={`${person.name.first} ${person.name.last}`}>
        <HireForm onHire={handleHire} />
      </Card>
    </div>
  )
}

export default PersonProfile
