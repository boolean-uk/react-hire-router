import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const { people } = props;

  useEffect(() => {
    if (id) {
      setPerson(people.find((person) => person.login.uuid === id));
    }
  }, [people, id]);

  if (!person) return <p>No person with that id found...</p>;

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
