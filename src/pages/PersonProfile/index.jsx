import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PersonProfile({ people, onHire }) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  const initializeData = () => {
    setPerson(people.find((person) => person.login.uuid === id));
  };

  useEffect(() => {
    initializeData();
  }, []);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} onSubmit={onHire} />
    </article>
  );
}

PersonProfile.propTypes = {
  people: PropTypes.array.isRequired,
  onHire: PropTypes.func.isRequired,
};

export default PersonProfile;
