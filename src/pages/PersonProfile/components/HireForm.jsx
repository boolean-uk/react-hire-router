import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function HireForm({ onSubmit, person }) {
  const [wage, setWage] = useState(person.wage ? person.wage : 0);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(person, wage);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">
        {person.wage ? "New wage offer " : "Wage Offer "}
      </label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">{person.wage ? "Update" : "Hire"}</button>
    </form>
  );
}

HireForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired,
};

export default HireForm;
