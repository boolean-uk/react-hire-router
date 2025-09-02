import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';

function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  const {id} = useParams();
  var wage = 0;
  
useEffect(() => {
  const foundPerson =
    props.people.find(p => p.login.uuid === id) ||
    props.hiredPeople.find(p => p.login.uuid === id);

  setPerson(foundPerson || null);
}, [props.people, props.hiredPeople, id]);

  if (!person) return <p>Loading...</p>

  if(person.wage) {
    wage = person.wage;
  }

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={props.setHiredPeople} hiredPeople={props.hiredPeople} setPeople={props.setPeople} wage={wage}/>
    </article>
  )
}

export default PersonProfile
