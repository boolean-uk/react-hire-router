import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const { person } = props;
  const { setHiredPeople } = props;
  const { hiredPeople } = props;
  const navigate = useNavigate();

  const navigateToDashboard = () => navigate("/");

  function handleSubmit(event) {
    event.preventDefault();
    if (wage) {
      // Person have a wage if already hired, want to edit
      if (
        hiredPeople.find(
          (hiredPerson) => hiredPerson.login.uuid === person.login.uuid
        )
      ) {
        setHiredPeople(
          hiredPeople.map((hiredPerson) =>
            hiredPerson.login.uuid === person.login.uuid
              ? { ...hiredPerson, wage: wage }
              : hiredPerson
          )
        );
      } else {
        setHiredPeople([...hiredPeople, { ...person, wage }]);
      }
      // Todo: automatically fill in wage if in hire
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
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
