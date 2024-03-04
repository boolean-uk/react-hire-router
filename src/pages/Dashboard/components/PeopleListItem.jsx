import { Routes, Route, Link, useNavigate } from "react-router-dom";

function PeopleListItem(props) {
  const { person, keyData } = props
  const navigate = useNavigate()

  function log(){
    console.log('item:', person, keyData)
  }

  return (
    <li key={keyData}>
      <h3>
      <Link to={`/view/${keyData}`} onClick={log}>{person.name.first} {person.name.last} </Link>
      </h3>
      <h4>
        {person.wage && <p>Wage: £{person.wage}</p>}
      </h4>
      <button onClick={() => navigate(`/view/${keyData}`)}>
        Edit
      </button>
      
      
    </li>
    
  )
}

export default PeopleListItem
