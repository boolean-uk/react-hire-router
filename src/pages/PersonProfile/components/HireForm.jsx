import { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const { setPeople, setHiredPeople, person } = props
  const [wage, setWage] = useState(person.wage || 0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    setHiredPeople(old =>  {
      if (!old.find(p => p.login.uuid === person.login.uuid)) return [...old, {...person, wage}]
      let oldList = [...old]
      oldList = oldList.map(p => {
        if (p.login.uuid === person.login.uuid) {
          p.wage = wage
        }
        return p
      })
      return oldList
    })
    setPeople(old => old.filter(p => p.login.uuid !== person.login.uuid))
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">{(person.wage || person.wage === 0) ? 'Edit' : 'Hire'}</button>
    </form>
  )
}

HireForm.propTypes = {
  person: PropTypes.object,
  setPeople: PropTypes.func,
  setHiredPeople: PropTypes.func,
}

export default HireForm
