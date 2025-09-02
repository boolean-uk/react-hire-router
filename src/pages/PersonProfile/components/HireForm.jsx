/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HireForm({ person, setHiredPeople }) {

  const navigate = useNavigate();
  const [wage, setWage] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (person.hired) {
        // Update existing wage
        setHiredPeople((prev) => 
          prev.map((p) => p.login.uuid == person.login.uuid
            ? { ...p, wage: wage }
            : p
          )
        );
      }
      else {
        // Add new person with wage
        person.wage = wage;
        person.hired = true;

        setHiredPeople((prev) => [
          ...prev,
          person
        ])
      }
      navigate('/dashboard');
    } catch (error) {
      console.error("Error:", error);
    }
  };

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

export default HireForm
