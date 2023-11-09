import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditPage({ hiredPeople, setHiredPeople }) {
  const [updatedWage, setUpdatedWage] = useState(0);
  const [personToUpdate, setPersonToUpdate] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setPersonToUpdate(location.state.person);
    }
  }, [location]);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedHiredPeople = hiredPeople.map((person) => {
      if (person.id.value === personToUpdate.id.value) {
        person.wage = updatedWage;
      }
      return person;
    });
    setHiredPeople([...updatedHiredPeople]);
    navigate("/");
  }
  return (
    <div>
      <h2>Make new wage offer:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="wage">New Wage Offer</label>
        <input
          type="text"
          id="new-wage"
          name="new-wage"
          onChange={(e) => setUpdatedWage(e.target.value)}
          value={updatedWage}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default EditPage;
