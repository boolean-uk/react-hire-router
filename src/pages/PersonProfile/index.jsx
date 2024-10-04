import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams} from 'react-router-dom'
import './profileStyle.css';

function PersonProfile({people, handler}) {
  const [person, setPerson] = useState(null)
  const { id } = useParams();



  useEffect(() => {
    if (people && id) {
      const match = people.find(profile => profile.login.uuid === id)
      if (match) {
        setPerson(match)
      }
    }
  }, [people, id])

  if (!person) return <p>Loading...</p>


  return (
    <article className="profile">
      <h2 className="profilename">
        {person.name.first} {person.name.last}
      </h2>
      <div className="profile-info">
        <img src={person.picture.large}/>
        <div className="basic-info">
          <ul>
            <li><strong>Email:</strong>{person.email}</li>
            <li><strong>Phone:</strong>{person.phone}</li>
          </ul>
        </div>
      </div>
      <HireForm person={person} handler={handler} />
    </article>
  )
}

export default PersonProfile
