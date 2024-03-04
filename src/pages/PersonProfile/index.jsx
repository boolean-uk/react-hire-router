import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HireForm from "./components/HireForm";
import PropTypes from "prop-types";

function PersonProfile(props) {
  const { people } = props;
  const [person, setPerson] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!people) navigate("/");
    if (props.isHiredList) {
      setPerson(props.hiredPeople.find((person) => person.id === id));
    } else {
      setPerson(people[id]);
    }
  }, [people, id]);

  if (!person) return <div>Loading...</div>;

  return (
    <article className="person-profile">
      <a href="#" onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="red"
            d="M18 11H7.41l5.3-5.29a1.004 1.004 0 0 0-1.42-1.42l-7 7a1.004 1.004 0 0 0 0 1.42l7 7a1.004 1.004 0 0 0 1.42-1.42L7.41 13H18a1 1 0 0 0 0-2z"
          />
        </svg>
      </a>
      <img src={person && person.picture.large} alt="thumbnail" />
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <p>{person.email}</p>
      {!person.hired && (
        <>
          <p>Available for hire</p>
          <HireForm
            person={person}
            people={props.people}
            setPeople={props.setPeople}
            hiredPeople={props.hiredPeople}
            setHiredPeople={props.setHiredPeople}
            id={id}
          />
        </>
      )}
    </article>
  );
}

PersonProfile.propTypes = {
  people: PropTypes.object.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  setHiredPeople: PropTypes.func.isRequired,
  setPeople: PropTypes.func.isRequired,
  isHiredList: PropTypes.bool,
};

export default PersonProfile;
