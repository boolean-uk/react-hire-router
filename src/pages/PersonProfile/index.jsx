import HiredPersonForm from './components/HiredPersonForm'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  // const [person, setPerson] = useState(null)
  const people = props.people
  const id = useParams()
  const hirePerson = props.hirePerson

  const hireHandler = (wage) => {
    person.wage = wage
    hirePerson(person)
  }

  const person = people.find((p) =>
    p.id == id.id)

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {person.wage == null ?
        <HireForm person={person} hireHandler={hireHandler} />
        :
        <HiredPersonForm person={person} hireHandler={hireHandler} />
      }
    </article>
  )
}

export default PersonProfile
