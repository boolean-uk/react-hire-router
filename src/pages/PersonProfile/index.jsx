import { useEffect, useState } from 'react'
import { useParams, useLocation } from "react-router-dom";
import HireForm from './components/HireForm'

function PersonProfile({people, setHiredPeople, hiredPeople}) {
  const { id } = useParams();
  const [person, setPerson] = useState(null)
  const [isEditMode, setIsEditMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const mode = searchParams.get('mode');
    setIsEditMode(mode === 'edit');

    if(people && id) {
      const matchingPerson = people.find(person => (person.login.uuid) === (id))
      setPerson(matchingPerson)
    }
  }, [people, id])

  if (!person) return <p>Loading...</p>
  
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last} {person.wage}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} isEditMode={isEditMode} />
    </article>
  )
}

export default PersonProfile
