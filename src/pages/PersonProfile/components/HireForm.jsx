import { useState } from 'react';

function HireForm({ person, handleSubmit }) {
  const [wage, setWage] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(person, wage);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
