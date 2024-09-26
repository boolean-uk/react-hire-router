import {Link} from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props
  let id = person.id.value;

  if(person.id.value === null){

    id= person.name.first + "_" + person.name.last;
  }

  if(person.hired === true){
    return(
<li onClick={console.log(person)}>
      
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <br></br><Link to={'/edit/'+ id}><button>Edit wage</button></Link><button onClick={props.remove}>Remove offer</button>
    </li>

    )
  }else if(person.hired === undefined){
  

return (
    <li onClick={console.log(person)}>
      
      <Link to={'/view/'+ id}><h3>
        {person.name.first} {person.name.last}
      </h3></Link>
    </li>
  )

  }else if(person.hired === false){

    return (
      <li onClick={console.log(person)}>
        
        <Link to={'/view/'+ id}><h3>
          {person.name.first} {person.name.last}
        </h3></Link>{person.wage && <p>Wage: £{person.wage}</p>}
      </li>
    )


  }
  

  
}

export default PeopleListItem
