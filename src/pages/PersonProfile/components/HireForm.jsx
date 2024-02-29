import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const HireForm = (props) => {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    props.hirePerson(props.person, e.target.children[1].value)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

HireForm.propTypes = {
  hirePerson: PropTypes.func,
  person: PropTypes.object,
}

export default HireForm
