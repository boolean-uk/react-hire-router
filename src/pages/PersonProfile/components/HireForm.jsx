import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const { person, onHire } = props;
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(person);
    const personWithWage = { ...person, wage: wage };
    onHire(personWithWage);
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
  onHire: PropTypes.func,
  person: PropTypes.object,
};

export default HireForm;
