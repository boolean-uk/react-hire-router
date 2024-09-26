export default function Profile(props){
    const {person} = props
    return(
        <div>
            <p>Location: {person.location.city}</p>
            <p>Street: {person.location.street.name}</p>
            <p>State: {person.location.state}</p>
            <p>Email: {person.email}</p>
            <p>Age: {person.dob.age}</p>
        </div>
    )
}