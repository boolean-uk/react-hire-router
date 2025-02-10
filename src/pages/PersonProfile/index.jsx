import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const {people, hiredPeople, setHiredPeople, edit, setEdit} = props
  const {id} = useParams();
  const [person, setPerson] = useState(null)

  useEffect(() => {
    if (people && id) {
      setPerson(people.find((people) => Number(people.id) === Number(id)));
    }
  }, [people, id]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} edit={edit} setEdit={setEdit} />
    </article>
  )
}

export default PersonProfile
