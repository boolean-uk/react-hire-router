/* eslint-disable react/prop-types */
import { useParams, useLocation } from "react-router-dom";
import HireForm from "./components/HireForm";

function PersonProfile(props) {
  let { state } = useLocation();
  let person = state != null ? state.person : null;

  const { addToHiredPeople } = props;
  let { id } = useParams();

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.title} {person.name.first} {person.name.last}
      </h2>
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <HireForm
        person={person}
        index={id}
        addToHiredPeople={addToHiredPeople}
      />
    </article>
  );
}

export default PersonProfile;
