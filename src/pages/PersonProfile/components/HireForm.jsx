import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    const newPerson = {
      ...props.person,
      wage: wage,
      id: props.id,
      hired: true,
    };

    props.setHiredPeople([...props.hiredPeople, newPerson]);

    const updatedPeople = props.people.filter((p) => {
      return (
        p.name.first !== props.person.name.first ||
        p.name.last !== props.person.name.last
      );
    });
    props.setPeople(updatedPeople);

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
  person: PropTypes.object.isRequired,
  people: PropTypes.array.isRequired,
  setPeople: PropTypes.func.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  setHiredPeople: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default HireForm;
