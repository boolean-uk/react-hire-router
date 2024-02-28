import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PersonProfile(props) {
  const { peopleList, onHire } = props;
  console.log("In PersonProfile People list: ", peopleList);
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("uuid?: ", id);
    const foundPerson = peopleList.find((p) => p.login.uuid === id);

    if (foundPerson) {
      setPerson(foundPerson);
    } else {
      console.error(`Person with UUID ${id} not found in peopleList`);
    }
  }, [peopleList, id]);
  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} onHire={onHire} />
    </article>
  );
}

PersonProfile.propTypes = {
  peopleList: PropTypes.array,
  onHire: PropTypes.func,
};

export default PersonProfile;
