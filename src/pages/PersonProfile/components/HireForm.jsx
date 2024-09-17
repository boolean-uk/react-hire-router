import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const { person, HirePerson } = props;
  const navigate = useNavigate();

  // Function to handle the form submission
  // It prevents the default form submission
  // It checks if the wage is a valid number
  // If not, it alerts the user
  function handleSubmit(event) {
    event.preventDefault();
    const personWithWage = { ...person, wage: wage };
    if (isNaN(personWithWage.wage) || personWithWage.wage <= 0) {
      alert("Please enter a valid wage amount.");
      return;
    }
    HirePerson(personWithWage);
    navigate("/");
  }

  // Return a form with an input field for the wage and a submit button
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
    </form>
  );
}

HireForm.propTypes = {
  HirePerson: PropTypes.func,
  person: PropTypes.object,
};

export default HireForm;
