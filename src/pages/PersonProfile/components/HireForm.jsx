import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const { person, setHiredPeople } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (person.wage) {
      setWage(person.wage);
    }
  }, [person.wage]);

  function handleSubmit(event) {
    event.preventDefault();
    if (wage <= 0) {
      console.error("Can't set wage less than 1");
      return;
    }

    person.wage = wage;
    setHiredPeople((prevHired) => {
      if (prevHired.includes(person)) {
        return [...prevHired];
      } else {
        return [...prevHired, person];
      }
    });
    navigate("/");
  }

  return (
    <div>
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
    </div>
  );
}

export default HireForm;

HireForm.propTypes = {
  person: PropTypes.object,
  setHiredPeople: PropTypes.func,
};
