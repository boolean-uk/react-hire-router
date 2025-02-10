import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function HireForm({ person, setHiredPeople }) {
  const [wage, setWage] = useState(0);
  const [finalWage, setFinalWage] = useState(person.wage || 0);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setHiredPeople((prevPeople) => {
      const existingPerson = prevPeople.find((p) => p.email === person.email);

      if (existingPerson) {
        return prevPeople.map((p) =>
          p.email === person.email ? { ...p, wage: wage } : p
        );
      } else {
        return [...prevPeople, { ...person, wage: wage }];
      }
    });
    setFinalWage(wage);
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
      <button type="submit">{finalWage === 0 ? "Hire" : "Set new wage"}</button>
    </form>
  );
}

HireForm.propTypes = {
  person: PropTypes.shape({
    email: PropTypes.string.isRequired,
    wage: PropTypes.string,
  }).isRequired,
  setHiredPeople: PropTypes.func.isRequired,
};

export default HireForm;
