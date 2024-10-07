import { useNavigate } from 'react-router-dom';

function HireForm({ person, setHiredPeople, hiredPeople }) {
  const navigate = useNavigate();

  const handleHire = (event) => {
    event.preventDefault();

    const isHired = hiredPeople.some((p) => p.login.uuid === person.login.uuid);

    if (!isHired) {
      setHiredPeople([...hiredPeople, person]);
    }

    navigate('/');  // Redirect to the dashboard after hiring
  };

  return (
    <form onSubmit={handleHire}>
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;


