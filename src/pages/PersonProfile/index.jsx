import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams, useLocation } from 'react-router-dom';

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { id } = useParams();
  const location = useLocation()

  const { hiredPeople, hirePerson, people } = props

  useEffect(() => {
    if (people && id) {
      // First looks for person in hiredPeople, if not found look in people
      let personToView = hiredPeople.find((person) => person.login.uuid === id)
      if (personToView === undefined) {
        personToView = people.find((person) => person.login.uuid === id)
      }
      setPerson(personToView);
    }
  }, [people, hiredPeople, id]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      { // Loads if im either viewing unhired person, or editing hired person
        person.wage === undefined || (location.pathname.includes("edit") && person.wage !== undefined) ? 
        <HireForm person={person} hirePerson={hirePerson}/> : 
        null
      }
    </article>
  )
}

export default PersonProfile
