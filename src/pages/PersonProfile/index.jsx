import HireForm from "./components/HireForm";
import { useLocation } from "react-router-dom";

function PersonProfile() {
  const location = useLocation();
  const { person } = location.state;

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  );
}

export default PersonProfile;
