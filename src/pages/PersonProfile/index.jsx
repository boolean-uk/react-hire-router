import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PersonProfile({ people, onHire }) {
  const { id } = useParams();
  const person = people[id];  

  if (!person) return <p>Loading...</p>;

  return (
    <div>
      <h1>{person.name.first} {person.name.last}</h1>
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <button onClick={() => onHire(person)}>Hire</button>
    </div>
  );
}

PersonProfile.propTypes = {
  people: PropTypes.array.isRequired,
  onHire: PropTypes.func.isRequired,
};

export default PersonProfile;
