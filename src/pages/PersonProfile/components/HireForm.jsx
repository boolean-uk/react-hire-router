import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HireForm(props) {
  const { person, hiredPeople, setHiredPeople } = props;
  const [wage, setWage] = useState(person.wage);
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    // Check if person.id is not already in hiredPeople
    !hiredPeople.some(p => p.id === person.id)
      ? setHiredPeople([...hiredPeople, person])
      : console.log("This person is already hired.");
  
    person.wage = wage;
    console.log(hiredPeople);
    navigate("/");
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

export default HireForm
