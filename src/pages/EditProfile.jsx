import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Card from './Dashboard/components/Card'

function EditProfile({ hiredPeople, onUpdate }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const person = hiredPeople.find(p => p.id === parseInt(id))
  const [wage, setWage] = useState(person?.wage || 0)
  
  if (!person) return <p className="text-center">Person not found</p>

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdate(person.id, { ...person, wage: Number(wage) })
    navigate('/')
  }

  return (
    <div className="mx-auto" style={{maxWidth: '500px'}}>
      <Card title={`Edit ${person.name.first} ${person.name.last}`}>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">£</span>
            <input
              type="number"
              className="form-control"
              value={wage}
              onChange={(e) => setWage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Update</button>
        </form>
      </Card>
    </div>
  )
}

export default EditProfile