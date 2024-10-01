import { useNavigate } from "react-router-dom"



function PeopleListItem(props) {
  
  const { person } = props
  const {num} =props
  console.log(person)
  
  const navigate=useNavigate()

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}

      <button onClick={()=>navigate("../view/"+num)}>
        See Profile
      </button>
    </li>
  )
}

export default PeopleListItem
