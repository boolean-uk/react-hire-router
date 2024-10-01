import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { people } = props;
  const { id } = useParams();
  const { setHiredPeople } = props;
  const { hiredPeople } = props;

  useEffect(() => {
    if (people && id) {
      setPerson(people.find((x) => x.login.uuid === id));
    }
  }, [person, people, id]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <img src={person.picture.large} alt="image"></img>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
      />
    </article>
  );
}

export default PersonProfile;
