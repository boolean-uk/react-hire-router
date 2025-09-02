import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './HireForm.css'

function HireForm({person, setHiredPeople, hiredPeople, setPeople, wage}) {
  const [wageState, setWage] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {setWage(wage)}, [wage])

  function handleSubmit(event) {
    event.preventDefault()
    person.wage = wageState
    const alreadyHired = hiredPeople.some(p => p.login.uuid === person.login.uuid);
    if(alreadyHired) {
      navigate('/Dashboard');
    }
    else {
      setHiredPeople(prev => [...prev, person])
      setPeople(prev => prev.filter(p => p.login.uuid !== person.login.uuid));
      console.log(hiredPeople)
      navigate('/Dashboard');
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
        value={wageState}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
