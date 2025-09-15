import { Link, useParams } from "react-router-dom";

function Profile({people, hiredPeople, setHiredPeople}) {
    const { id } = useParams();
    const person = people[id];

    function onHire() {
        setHiredPeople([...hiredPeople, person]);
    }

    return(
        <div className="profile">
        <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
        <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
        <p>Age: {person.dob.age}</p>
        <p>Email: {person.email}</p>
        <p>Phone: {person.phone}</p>
        <p>
            Location: {person.location.city}, {person.location.state}, {person.location.country}
        </p>
        <p>Nationality: {person.nat}</p>
        <Link to="/">
            <button onClick={onHire}>Hire</button>
        </Link>
    </div>
    )
}

export default Profile;