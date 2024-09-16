import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function HireForm(props) {
  const { onPersonUpdate, person } = props;

  const [wage, setWage] = useState(person?.wage || "0");
  
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedPerson = { ...person, wage };
    onPersonUpdate(id, updatedPerson);
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage:</label>
      <input
        type="text"
        id="wage"
        name="wage"
        value={wage}
        onChange={(e) => setWage(e.target.value)}
      />
      <button type="submit">Update Wage</button>
    </form>
  );
}

export default HireForm;