import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { useLocation, useParams } from "react-router-dom";
function PersonProfile(props) {
  const linkedPerson = useLocation().state.person;
  const [person, setPerson] = useState(null);
  const params = useParams();

  console.log("params", params);
  console.log(useLocation());

  useEffect(() => {
    setPerson(linkedPerson);
  }, []);

  if (!person) return <p>Loading.......</p>;

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
