import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({ person, people, setPeople, setHiredPeople }) {

  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (person.wage)
    {
      setWage(person.wage);
    }
  }, [person]);

  function handleSubmit(event) {
    event.preventDefault();

    // Check if the person is in the current people list
    const isPersonInPeople = people.some(p => p.id === person.id);

    if (isPersonInPeople)
    {
      // Add person to hiredPeople with updated wage
      setHiredPeople(prevHiredPeople => [...prevHiredPeople, { ...person, wage: Number(wage) }]);

      // Remove the person from people
      setPeople(prevPeople => prevPeople.filter(p => p.id.value !== person.id.value));
    } else
    {
      // Update the person's wage in hiredPeople if they are already hired
      setHiredPeople(prevHiredPeople =>
        prevHiredPeople.map(p => p.id.value === person.id.value ? { ...p, wage: Number(wage) } : p)
      );
    }

    // Navigate to home page
    navigate("/");
  }

  if (people)
  {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="wage">Wage Offer</label>
        <input
          type="text"
          id="wage"
          name="wage"
          value={wage}
          onChange={e => setWage(e.target.value)}
        />
        <button type="submit">Hire</button>
      </form>
    )
  }
}

import PropTypes from 'prop-types'
HireForm.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  person: PropTypes.object,
  setHiredPeople: PropTypes.func,
  setPeople: PropTypes.func
}

export default HireForm
