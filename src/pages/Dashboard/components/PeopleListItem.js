import { Link } from "react-router-dom";

function PeopleListItem(props) {
    const {
        person,
        listName,
        hiredPeople,
        setHiredPeople,
        editMode,
        people,
        setPeople,
    } = props;

    return (
        <li>
            <h3>
                {person.name.first} {person.name.last}
            </h3>
            {person.wage && <p>Wage: £{person.wage}</p>}

            {listName === "people" &&
                (person.isHired ? (
                    <div className="already-hired">Already Hired!</div>
                ) : (
                    <Link
                        to={`/view/${person.id.value}`}
                        state={{ person }}
                        people={people}
                        setPeople={setPeople}
                    >
                        View Profile-{person.isHired}
                    </Link>
                ))}
            {listName === "hiredPeople" && (
                <Link
                    to={`/edit/${person.id.value}`}
                    state={{ person }}
                    hiredPeople={hiredPeople}
                    setHiredPeople={setHiredPeople}
                    wage={person.wage}
                    editMode={editMode}
                    people={people}
                    setPeople={setPeople}
                >
                    Edit Profile
                </Link>
            )}
        </li>
    );
}

export default PeopleListItem;
