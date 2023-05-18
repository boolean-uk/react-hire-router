import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import HireForm from "./components/HireForm";

function PersonProfile({ hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state) {
      setPerson(location.state.person);
    }
  }, [location]);

  const hirePerson = (wage) => {
    const newPerson = person;
    newPerson.wage = wage;
    setHiredPeople([...hiredPeople, newPerson]);
    navigate("/");
  };

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hire={hirePerson} />
    </article>
  );
}

export default PersonProfile;
