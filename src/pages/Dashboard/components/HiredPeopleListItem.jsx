import { Link } from 'react-router-dom';
export default function HiredPeopleListItem(props){
    const { hiredPeople } = props
    console.log(hiredPeople)
    return(
    <li>
      <h3>
        {hiredPeople.name.first} {hiredPeople.name.last}
      </h3>
      {hiredPeople.wage && <p>Wage: £{hiredPeople.wage}</p>}
      <br/>

      <Link to={`/profile/${hiredPeople.name.first +hiredPeople.name.last}`}>
      View profile 
      </Link>
      <br />
      <Link to={`/profile/${hiredPeople.name.first + hiredPeople.name.last}/edit`}>
        Edit
      </Link>
    </li>
    )
}