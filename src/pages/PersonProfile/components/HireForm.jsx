import PropTypes from 'prop-types'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

HireForm.propTypes = {
  person: PropTypes.object,
  hiredCallback: PropTypes.func
}

var currentPerson = {}

function HireForm({ person, hiredCallback }) {
  const [wage, setWage] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const _wageRequest = event.target.wage.value

    if (_wageRequest <= 0)
      return
    
    currentPerson['wage'] = _wageRequest
    hiredCallback(currentPerson, isEditing)
    navigate('/')
  }

  function editCallback() {
    setIsEditing(true)
  }

  currentPerson = person

  return (
    <div>
      <form onSubmit={handleSubmit}>
      {(!currentPerson.hired || isEditing) &&
          <div>
            <label htmlFor="wage">Wage Offer</label>
        <input
          type="text"
          id="wage"
          name="wage"
          onChange={e => setWage(e.target.value)}
          value={wage}
        />
        <button type="submit">{!isEditing ? 'Hire' : 'Confirm Edits'}</button>
          </div> 
      }
    </form>
    {(currentPerson.hired && !isEditing) &&
      <div>
        <p style={{color: "red"}}>This person is already Hired for £{person.wage}</p>
        <button onClick={editCallback}>Edit</button>
      </div>
    }
    </div>
  )
}

export default HireForm
