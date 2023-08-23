import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
    const {
        people,
        listName,
        hiredPeople,
        setHiredPeople,
        editMode,
        setPeople,
    } = props;

    return (
        <ul>
            {people.map((person, index) => (
                <PeopleListItem
                    key={index}
                    person={person}
                    hiredPeople={hiredPeople}
                    setHiredPeople={setHiredPeople}
                    listName={listName}
                    editMode={editMode}
                    people={people}
                    setPeople={setPeople}
                />
            ))}
        </ul>
    );
}

export default PeopleList;
