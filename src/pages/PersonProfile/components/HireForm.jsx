import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function HireForm({ onHire }) {
  const [wage, setWage] = useState(0);
  const { person, addToHired } = onHire;

  HireForm.propTypes = {
    onHire: PropTypes.shape({
      person: PropTypes.object.isRequired,
      addToHired: PropTypes.func.isRequired,
    }).isRequired,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const wageAmount = parseFloat(wage);
    if (isNaN(wageAmount) || wageAmount <= 0) {
      alert("Please enter a valid wage amount.");
      return;
    }
    onHire(wageAmount);
    setWage("");
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    person.wage = wage > 0 ? wage : undefined;
    addToHired({ person });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        value={wage}
        onChange={(e) => setWage(e.target.value)}
      />
      <button type="submit">Hire</button>
      <botton onClick={() => handleClick}>Hire</botton>
    </form>
  );
}

export default HireForm;
