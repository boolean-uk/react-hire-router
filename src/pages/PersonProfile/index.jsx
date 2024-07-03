import { useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function PersonProfile({people, hiredPeople, setHiredPeople, wage, setWage}) {
  const [person, setPerson] = useState(null);
  const params = useParams();

  useEffect(() => {
    const selectedPerson = people.find((person) => person.id.value === params.id);
    setPerson(selectedPerson)
  }, [people, params.id]);


  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} wage={wage} setWage={setWage}/>
    </article>
  );
}

export default PersonProfile
