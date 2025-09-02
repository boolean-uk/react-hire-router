import HireForm from './components/HireForm'

function PersonProfile({person, hirePerson, navigate}) {

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm hirePerson={hirePerson} navigate={navigate} />
    </article>
  )
}

export default PersonProfile
