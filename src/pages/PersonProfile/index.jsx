
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const { people, setPeople, hiredPeople, setHiredPeople, navigateToDashboard} = props
  const { id } = useParams()
  const person = people.find(person => person.id === parseInt(id))
  const hiredPerson = hiredPeople.find(person => person.id === parseInt(id));


 




  function hirePerson(wage){
    if(!hiredPeople.includes(person)){
      person.hired = true
      person.wage = wage
      setPeople(x => { return x.filter(y => y !== person)
        })

      setHiredPeople([...hiredPeople, person])
    }
  }

  function editPerson(wage){
    const newHiredPeople = [...hiredPeople]
    const newPerson = newHiredPeople.find(person => person.id === parseInt(id))
    newPerson.wage = wage
    setHiredPeople(newHiredPeople)
  }



 if (person) return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm hirePerson = {hirePerson} hired = {person.hired} navigateToDashboard = {navigateToDashboard}/>
    </article>
  )

  if (hiredPerson) return (
    <article>
      <h2>
        Employee {hiredPerson.name.first} {hiredPerson.name.last}
      </h2>
      <HireForm editPerson = {editPerson} hired = {hiredPerson.hired} navigateToDashboard = {navigateToDashboard}/>
    </article>
  )
}

export default PersonProfile
