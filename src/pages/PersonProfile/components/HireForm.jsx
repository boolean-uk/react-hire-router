import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function HireForm({ person, setHiredPeople, hiredPeople, isEditMode }) {
  const [wage, setWage] = useState(0);
  const [isHired, setIsHired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const existingPerson = hiredPeople.find(hiredPerson => hiredPerson.login.uuid === person.login.uuid);
    if (existingPerson) {
      setIsHired(true);
    
    } else {
      setIsHired(false);
    }
  }, [person, hiredPeople]);

  const handleHire = () => {
    if (isHired) {
      setHiredPeople(prevHiredPeople =>
        prevHiredPeople.map(hiredPerson =>
          hiredPerson.login.uuid === person.login.uuid
            ? { ...hiredPerson, wage }
            : hiredPerson
        )
      );
      navigate("/dashboard");
    } else {
      setHiredPeople(prevHiredPeople => [...prevHiredPeople, { ...person, wage }]);
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleHire(); }}>
      <label>
        Wage:
        <input
          type="text"
          value={wage}
          onChange={(e) => setWage(e.target.value)}
          disabled={isHired && !isEditMode}
        />
      </label>
      <button type="submit" disabled={isHired && !isEditMode}>
        {isHired ? "Update Wage" : "Hire"}
      </button>
    </form>
  );
}

export default HireForm;
