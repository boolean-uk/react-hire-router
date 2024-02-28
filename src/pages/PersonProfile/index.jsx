import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useLocation, useParams } from "react-router-dom";

function PersonProfile(props) {
  // eslint-disable-next-line react/prop-types
  const { people, setHiredPeople } = props;
  const [person, setPerson] = useState(null);

  const locationData = useLocation();
  console.log(locationData);
  const params = useParams();
  const personId = params.id;

  const personById = people.find((p) => p.id === parseInt(personId));

  function loadPerson() {
    if (people) {
      setPerson(personById);
    }
  }

  useEffect(() => loadPerson, [loadPerson, person]);
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
