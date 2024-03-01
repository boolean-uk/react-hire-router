import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function HireForm(props) {
  const { person, hirePerson } = props; 
  const [wage, setWage] = useState(0)
  const navigate = useNavigate();


  //TODO: 
  // - Lagre person med nytt attr/prop "wage" ok
  // - Få denne personen til "hiredpeople" som er i app
  // - Naviger til "/" etter det er gjort

  function handleSubmit(event) {
    event.preventDefault()
    // Update the person property with the wage value
    person['wage'] = wage

     // Call the hirePerson function passed as a prop
    hirePerson(person)

    // Reset the wage value
    setWage(0)
    
    // Navigate to the dashboard
    navigate('/');
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
