/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function PeopleListItem(props) {
    const { person , hiredList} = props

    return (
        <li>
            <h3>
                <Link to={`/person/${person.login.username}`}>
                    {person.name.first} {person.name.last}
                </Link>
            </h3>
            {person.wage && hiredList && <><p>Wage: £{person.wage}</p> <Link to={`/person/${person.login.username}`}><button>Edit</button></Link></>}
        </li>
    )
}

export default PeopleListItem
