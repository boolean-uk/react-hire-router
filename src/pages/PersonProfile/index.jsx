import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HireForm from './components/HireForm';

function PersonProfile({ people, setHiredPeople, hiredPeople }) {
  const { uuid } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const selectedPerson = people.find((p) => p.login.uuid === uuid);
    if (selectedPerson) {
      setPerson(selectedPerson);
    } else {
      console.log("Person not found!");
    }
  }, [uuid, people]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>{person.name.first} {person.name.last}</h2>
      <p>Email: {person.email}</p>
      <HireForm person={person} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} />
    </article>
  );
}

export default PersonProfile;




