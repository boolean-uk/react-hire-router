import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import HireForm from "./components/HireForm";

function PersonProfile({ people, makeHire, makeEdit }) {
  const { id } = useParams();

  const [person, setPerson] = useState(null);

  useEffect(() => {
    if (people && id) {
      setPerson(people.find((p) => p.login.md5 === id));
    }
  }, [people, id]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} makeHire={makeHire} makeEdit={makeEdit} />
    </article>
  );
}

PersonProfile.propTypes = {
  people: PropTypes.array,
  makeHire: PropTypes.func,
  makeEdit: PropTypes.func,
};

export default PersonProfile;
