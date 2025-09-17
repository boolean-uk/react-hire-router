import {Link} from "react-router-dom";

function PeopleListItem(props) {
    const {person, canEdit} = props

    const personId = person.name.first + '_' + person.name.last;

    return (
        <li>
            <Link to={"/view/" + personId}>
                <h3>
                    {person.name.first} {person.name.last}

                </h3>
            </Link>
            {canEdit && (
                <Link to={"/edit/" + personId}>Edit</Link>
            )}
        </li>
    )
}

export default PeopleListItem
