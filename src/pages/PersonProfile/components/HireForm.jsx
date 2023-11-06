import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HireForm(props) {
 
  const { person, hiredPeople, setHiredPeople } = props;

  const [wage, setWage] = useState(0);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); 

    const hired = { ...person, wage: wage };

    const individual = hiredPeople.some((p) => p.id.name === hired.id.name);

    if (!individual) {
      const updatedHiredPeople = [...hiredPeople, hired];

      setHiredPeople(updatedHiredPeople);
    }

    navigate('/Dashboard');
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
  );
}

export default HireForm;
