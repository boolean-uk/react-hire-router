import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm({ params, person, hiredPeople, setHiredPeople }) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    person.wage = wage;
    person.hired = true;

    if (hiredPeople.some((peep) => peep.id.id === person.id.id)) {
      setHiredPeople([...hiredPeople]);
    } else {
      setHiredPeople([...hiredPeople, person]);
    }
    navigate("/");
  }

  useEffect(() => {
    person.hired && setWage(person.wage);
  }, [person]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="wage" className="flex text-neutral-700">
        <div className="basis-2/3 p-2">Wage Offer</div>
        <input
          type="text"
          id="wage"
          name="wage"
          onChange={(e) => setWage(e.target.value)}
          value={wage}
          className="min-w-0 basis-1/3 rounded-l-lg p-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-b-lg bg-emerald-500 p-2 text-white"
      >
        Hire
      </button>
    </form>
  );
}

export default HireForm;
