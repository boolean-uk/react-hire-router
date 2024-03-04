import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';

function PersonProfile({people, setPeople, setHiredPeople, hiredPeople}) {
  const [person, setPerson] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    if (people && id) {
      setPerson(people.find((person) => Number(person.id.value) === Number(id)));
    }
  }, [people, id]);



  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
        <em>(ID: {person.id.value})</em>
      </h2>
      <HireForm person ={person} people={people} setPeople={setPeople} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>
    </article>
  )
}

export default PersonProfile
