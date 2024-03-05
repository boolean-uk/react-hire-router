import { useState , useEffect} from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';
import Profile from './components/Profile';

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const {people,setHiredPeople} = props;
  const {id} = useParams();

  useEffect(() => {
    if (people && id) {
      setPerson(people.find((aPeople) => (aPeople.name.first+aPeople.name.last) === (id)));
    }
  }, [people, id]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople}/>
      <Profile person = {person} />
    </article>
  )
}

export default PersonProfile
