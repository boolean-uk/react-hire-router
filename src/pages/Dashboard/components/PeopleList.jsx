import PeopleListItem from './PeopleListItem'
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import personShape from "../../../validators/personShape.js";

function PeopleList(props) {
    const {people, onHire, editable} = props

    let navigate = useNavigate();
    const onEdit = editable ? (id) => {
        navigate(`/view/${id}`)
    } : null

    console.log(people)

  return (
      <ul className={"no-bullet-points"}>
          {people && people.map((person, index) => (
              <PeopleListItem key={index} id={index} person={person} onClick={() => navigate(`/view/${index}`)} onHire={onHire}
                              onEdit={onEdit}/>
      ))}
    </ul>
  )
}

PeopleList.propTypes = {
    people: PropTypes.arrayOf(personShape).isRequired,
    onHire: PropTypes.func,
    editable: PropTypes.bool,
}

export default PeopleList
