import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const { person } = props;
  const { setHiredPeople } = props;
  const { hiredPeople } = props;
  const navigate = useNavigate();

  const navigateToDashboard = () => navigate("/");

  // Checks if person is hired
  const personIsHired = () => {
    if (
      hiredPeople.find(
        (hiredPerson) => hiredPerson.login.uuid === person.login.uuid
      )
    ) {
      return true;
    }
    return false;
  };

  function handleSubmit(event) {
    event.preventDefault();
    // Only possible to submit if a wage is given
    if (wage) {
      // Want to edit wage if already hired
      if (personIsHired()) {
        setHiredPeople(
          hiredPeople.map((hiredPerson) =>
            hiredPerson.login.uuid === person.login.uuid
              ? { ...hiredPerson, wage: wage }
              : hiredPerson
          )
        );
      }
      // Adds person with wage if not already hired
      else {
        setHiredPeople([...hiredPeople, { ...person, wage }]);
      }
      navigateToDashboard();
    }
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
      <button type="submit">{personIsHired() ? "Update Wage" : "Hire"}</button>
    </form>
  );
}

export default HireForm;
