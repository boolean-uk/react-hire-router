/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


export default function PeopleListItem({ person }) {

  return (
    <li>

      <Link to={`/view/${person.login.uuid}`}>

      <h3>
        {person.name.first} {person.name.last}
      </h3>

    <img src={person.picture.large}  />

    </Link>


      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}



{/* represents single person (therefore taking in just one person inside). Link is used for navigating to different
  screens/routes. 
  <li> used for information about user.
  Link is created so we can see a unique users profile.  */}
