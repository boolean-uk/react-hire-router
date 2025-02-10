import HireForm from "./components/HireForm";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function PersonProfile({ setHiredPeople }) {
  const location = useLocation();
  const person = location.state?.person;

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} />
    </article>
  );
}

PersonProfile.propTypes = {
  setHiredPeople: PropTypes.func.isRequired,
};

export default PersonProfile;
