import  { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PersonProfile({ users, hirePerson }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const person = users.find((u) => u.login.uuid === id);
  const [wage, setWage] = useState("");

  if (!person) return <p>Loading...</p>;

  const handleHire = (event) => {
    event.preventDefault();
    hirePerson(person, wage);
    navigate("/");
  };

  return (
    <article>
      <h2>{person.name.first} {person.name.last}</h2>
      <img src={person.picture.large} alt={person.name.first} />
      <p>Email: {person.email}</p>
      <form onSubmit={handleHire}>
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
    </article>
  );
}

export default PersonProfile;
