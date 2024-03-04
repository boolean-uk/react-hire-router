import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {

  const {id} = useParams()
  const person = props.people.find((p)=>p.id.value==id) ? props.people.find ((p)=>p.id.value==id) :props.people.find(p=>p.name.first+"_"+p.name.last ==id)

 
  if (!person || person ===undefined) { 
    return <p>Loading...</p>
  }
  
  function saveOffer(target){
    person.wage = target;    
    person.hired = true;
    props.newHire(person)
    

  
  }
  

      return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} saveOffer={saveOffer}/>
    </article>
  )
  



}

export default PersonProfile
