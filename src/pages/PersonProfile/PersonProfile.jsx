import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HireForm from "./components/HireForm";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { people, setHiredPeople, hiredPeople } = props;

  const params = useParams();
  const { email } = params;

  useEffect(() => {
    setPerson(people?.find((item) => item.email == email));
  }, [email, people]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        setHiredPeople={setHiredPeople}
        hiredPeople={hiredPeople}
      />
    </article>
  );
}

export default PersonProfile;
