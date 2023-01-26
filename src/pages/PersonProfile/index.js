import { useState } from "react"
import { useLocation } from "react-router"
import { useEffect } from "react"
import HireForm from "./components/HireForm"


function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  let location = useLocation()
  useEffect(() => {
    // the if statement is checking if the location is equal to a product iD
    // then render the product if not then display loading.
    // the state is passing the product from the link if the link is not 
    // clicked then the information isent passed.
    if (location.state) {
      const { person } = location.state;
      console.log("locationstate",location.state)
      setPerson(person);
    }
  }, [location]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person}  />
    </article>
  )
}

export default PersonProfile;
