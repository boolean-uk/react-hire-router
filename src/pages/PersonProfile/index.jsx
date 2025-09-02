/* eslint-disable react/prop-types */
import HireForm from "./components/HireForm";
import { useLocation } from "react-router";

function PersonProfile({ handleAddPeople }) {
  const location = useLocation();

  if (!location.state) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {location.state.name.first} {location.state.name.last}
      </h2>
      <HireForm person={location.state} handleAddPeople={handleAddPeople} />
    </article>
  );
}

export default PersonProfile;
