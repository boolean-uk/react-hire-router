import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { id } = useParams();
  const { peopleList } = props;

  useEffect(() => {
    if (peopleList && id) {
      setPerson(peopleList.find((person) => person.email === id));
    }
  }, [person, id]);


  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} handleHired={props.handleHired} />
    </article>
  )
}

export default PersonProfile
