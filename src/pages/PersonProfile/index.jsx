import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PersonProfile({ people, setHiredPeople }) {
  const [person, setPerson] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setPerson(people.find((person) => person.login.uuid === id));
  }, [id, people]);

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

export default PersonProfile;

PersonProfile.propTypes = {
  people: PropTypes.array,
  setHiredPeople: PropTypes.func,
};
