import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function HireForm(props) {
  const [wage, setWage] = useState(0)

  const {person, hiredPeople, setHiredPeople, id} = props;
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    const index = hiredPeople.findIndex(person => person.id.name === id);

    //Checks if the person is in hiredPeople list, if true, change the wage number instead of creating a new object of the person.
    if (index !== -1) {
      const updatedHiredPeople = [...hiredPeople];
      updatedHiredPeople[index].wage = Number(wage);
      setHiredPeople(updatedHiredPeople);
    } else{
      const newHire = {
      name:{
        first: `${person.name.first}`,
        last: `${person.name.last}`
      },
      id:{
        name: `${person.id.name}`
      },
      wage: Number(wage) 
    };
    setHiredPeople([...hiredPeople, newHire]);
    }
    
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
      <button type="submit" onClick={() => navigate(-1)}>
        Hire</button>
    </form>
  )
}

export default HireForm
