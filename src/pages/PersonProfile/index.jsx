// PersonProfile.js
import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const { allPeople, newHire } = props;
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const chosenPerson = allPeople.filter(obj => {return obj.login.uuid == id})
    console.log(allPeople);

    console.log(chosenPerson);
    setPerson(chosenPerson[0]);
  }, [id]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} newHire={newHire}/>
    </article>
  );
}

export default PersonProfile;
