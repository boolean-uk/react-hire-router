import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const tempPerson = props.person;
    tempPerson.wage = wage;
    console.log(tempPerson.wage);
    console.log(props.hiredPeople);
    props.setHiredPeople([...props.hiredPeople, tempPerson]);

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
      {/* onClick={} on click i need to set hiered with this person and save the wage*/}
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;

HireForm.propTypes = {
  person: PropTypes.object,
  setHiredPeople: PropTypes.func,
  hiredPeople: PropTypes.arrayOf(PropTypes.object),
};
