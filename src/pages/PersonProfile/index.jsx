import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);

  const { peopleData, hirePerson } = props;
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    setPerson(peopleData[id])
    // console.log("USEEFFECT", person);
  }, [peopleData, person, id]);

  // setPerson(props.person)
  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={hirePerson} />
    </article>
  );
}

export default PersonProfile;
