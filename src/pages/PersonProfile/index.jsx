import HireForm from './components/HireForm'
import { usePeople } from '../../context/PersonProvider'
import { useParams } from 'react-router-dom';

function PersonProfile() {

  const {people, setPeople}= usePeople();
  const {uuid} = useParams();

  const person = people.find(p => p.login.uuid === uuid);

  const editWage = (wage) => {
    const editedPeople = people.map(p => {
      if (p.login.uuid === uuid) {
        return {...p, wage, hired: true};
      }
      return p;
    });
    setPeople(editedPeople);
    console.log(editedPeople)
  }

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.medium}/>
      {person.wage && <p style={{fontWeight: 'bold'}}>Wage: £{person.wage}</p>}
      {person.hired && <strong>Hired! </strong>}
      <p>{person.email}</p>
      <p>{person.location.country}</p>
      <HireForm person={person} onSetWage={editWage}/>
    </article>
  )
}

export default PersonProfile
