import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  //setPerson(props.person); instead of person it now gets a list of all people. maby try comparing id from url with id from elements in the list.

  const { id } = useParams();
  //console.log("userID?", id);

  //console.log(props);

  useEffect(() => {
    const user = props.people.find((p) => p.login.uuid === id);
    setPerson(user);
    //console.log("user is", user);
  }, [id, props.people]);

  //console.log(person);
  if (!person) return <p>Loading...</p>;
  console.log("hiered people should be empty array not ...", props.hiredPeople);

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        setHiredPeople={props.setHiredPeople}
        hiredPeople={props.hiredPeople}
      />
    </article>
  );
}

export default PersonProfile;

PersonProfile.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  setHiredPeople: PropTypes.func,
  hiredPeople: PropTypes.arrayOf(PropTypes.object),
};
