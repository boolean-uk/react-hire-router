import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const { person, hiredPeople, setHiredPeople, people, setPeople } = props;
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setHiredPeople([...hiredPeople, { ...person, wage: wage }]);

    const personIndex = people.findIndex((p) => p.id === person.id);
    const updatedPeople = people.map((pers, index) => {
      if (index === personIndex) {
        return { ...pers, wage: wage };
      }
      return pers;
    });
    setPeople(updatedPeople)
    navigate("/");
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

HireForm.propTypes = {
  person: PropTypes.object,
  hiredPeople: PropTypes.array,
  setHiredPeople: PropTypes.func,
  people: PropTypes.array,
  setPeople: PropTypes.func,
};

export default HireForm;
