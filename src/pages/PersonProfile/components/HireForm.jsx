import { useState } from 'react'

function HireForm({ person, onHire }) {
  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    onHire(Number(wage))
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label htmlFor="wage" className="form-label">Wage Offer</label>
        <div className="input-group">
          <span className="input-group-text">£</span>
          <input
            type="number"
            className="form-control"
            id="wage"
            name="wage"
            onChange={e => setWage(e.target.value)}
            value={wage}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-100">Hire</button>
    </form>
  )
}

export default HireForm
