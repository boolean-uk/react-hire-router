import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PersonProfile({ hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://randomuser.me/api/?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data.results[0]);
      });
  }, [id]);

  const handleHire = () => {
    setHiredPeople([...hiredPeople, person]);
    navigate("/");
  };

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <button onClick={handleHire}>Hire</button>
    </article>
  );
}

PersonProfile.propTypes = {
  hiredPeople: PropTypes.array.isRequired,
  setHiredPeople: PropTypes.func.isRequired,
};

export default PersonProfile;
