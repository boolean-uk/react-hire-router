import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const {person, setHiredPeople, hiredPeople} = props
  const [wage, setWage] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    // Set the initial value of wage when the component mounts
    setWage(person.wage || 0);
  }, [person.wage]);

  function handleSubmit(event) {
    event.preventDefault();

    // Check if the person already exists in hiredPeople
    const personIndex = hiredPeople.findIndex((p) => p.id === person.id);

    if (personIndex !== -1) {
      // If person exists, update their wage
      const updatedHiredPeople = [...hiredPeople];
      updatedHiredPeople[personIndex].wage = wage;
      setHiredPeople(updatedHiredPeople);
    } else {
      // If person doesn't exist, add them to hiredPeople
      setHiredPeople((prevHiredPeople) => [...prevHiredPeople, { ...person, wage }]);
    }

    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
