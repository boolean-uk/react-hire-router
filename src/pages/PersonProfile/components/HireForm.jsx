import { useState } from "react";
import PropTypes from "prop-types";

function HireForm({ person, makeHire, makeEdit }) {
  const [wage, setWage] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
  }

  console.log("hireform pereson: ", person.wage);

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
      {person.wage === undefined ? (
        <button type="submit" onClick={(e) => makeHire(e, person, wage)}>
          Hire
        </button>
      ) : (
        <button type="submit" onClick={(e) => makeEdit(e, person, wage)}>
          Edit
        </button>
      )}
    </form>
  );
}

HireForm.propTypes = {
  person: PropTypes.object,
  makeHire: PropTypes.func,
  makeEdit: PropTypes.func,
};

export default HireForm;
