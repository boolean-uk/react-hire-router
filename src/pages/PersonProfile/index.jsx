import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile(props) {

  const { id } = useParams();
  const [person, setPerson] = useState(null)

  useEffect(() => {
      const fetchPerson = async () => {
        const p = props.people.find(p => p.login.uuid === id);
        setPerson(p);
        console.log(person)
        
      };
      fetchPerson();
    }, []);



  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={props.hiredPeople} setHiredPeople={props.setHiredPeople} people={props.people} />
    </article>
  )
}

export default PersonProfile
