import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person, id ,editable, setHiredPeople, people} = props


  function handleButtonClick(event) {
    event.preventDefault()
    setHiredPeople(prev => prev.filter((obj, i) => obj !== person));
  }


  if(editable) {
     return (
    <>
    <Link to={`/view/${id}`}>
      <li>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        
        {person.wage && <p>Wage: £{person.wage}</p>}

      </li>
    </Link>
    <button onClick={handleButtonClick}>remove</button>
    </>
  )
  } else {
     return (
    <>
    <Link to={`/view/${id}`}>
      <li>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        
        {person.wage && <p>Wage: £{person.wage}</p>}

      </li>
    </Link>
    {/* <button>remove</button> */}
    </>
  )
  }

}

export default PeopleListItem
