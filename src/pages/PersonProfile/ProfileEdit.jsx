import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProfileEdit = (props) => {

    const [personToUpdate, setPersonToUpdate] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const { people, setPeople } = props;
  
    useEffect(() => {
        if (people && id) {
          setPersonToUpdate(people.find((person) => String(person.login.uuid) === String(id)));
        }
      }, [people, id]);
  
    function handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      console.log("name", name);
      console.log("value", value);
      setProductToUpdate({ ...personToUpdate, [name]: value });
    }
  
    function handleSubmit(event) {
      let people = [...people];
      people = people.filter(
        (person) => person.login.uuid !== person.login.uuid
      );
  
      setPeople([
        ...people,
        {
          gender: personToUpdate.gender,
          email: personToUpdate.email,
          name: {
            first: personToUpdate.name.first,
            last: personToUpdate.name.last
          },
          location: {
            country: personToUpdate.location.country
          },
          login: {
            uuid: personToUpdate.login.id
          },
        },
      ]);
      event.preventDefault();
      navigate("/");
    }
    console.log(personToUpdate)
  
    if (!personToUpdate) return <div>Loading...</div>;

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first">
                    Gender
                    <input
                    type="text"
                    id="first"
                    name="first"
                    onChange={handleChange}
                    value={personToUpdate.name.first}
                    className="form-control"
                    />
                </label>
                <br />
                <br />
                <label htmlFor="last">
                    Gender
                    <input
                    type="text"
                    id="last"
                    name="last"
                    onChange={handleChange}
                    value={personToUpdate.name.last}
                    className="form-control"
                    />
                </label>
                <br />
                <br />
                <label htmlFor="gender">
                    Gender
                    <input
                    type="text"
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    value={personToUpdate.gender}
                    className="form-control"
                    />
                </label>
                <br />
                <br />
                <label htmlFor="country">
                    Product Type
                    <input
                    type="text"
                    id="country"
                    name="country"
                    onChange={handleChange}
                    value={personToUpdate.location.country}
                    className="form-control"
                    />
                </label>

                <br />
                <br />
                <label htmlFor="email">
                    Product Price
                    <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={personToUpdate.email}
                    className="form-control"
                    />
                </label>
                <br />
                <br />
                <label htmlFor="uuid">
                    quantity
                    <input
                    type="text"
                    id="uuid"
                    name="uuid"
                    onChange={handleChange}
                    value={personToUpdate.login.id}
                    className="form-control"
                    />
                </label>
                <br />
                <br />
                <button className="btn btn-success" type="submit">
                    Update
                </button>
                <button className="btn btn-danger" onClick={() => navigate("/")}>
                    Cancel
                </button>
            </form>
        </>
    )
}

export default ProfileEdit