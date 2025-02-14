import PropTypes from "prop-types";
import personShape from "../../../validators/personShape.js";
function PeopleListItem(props) {
    const {id, person, onClick, onHire, onEdit} = props

  return (
      <li className={"person-card"} onClick={onClick}>
          <div className={"person-card-left"}>
              <img src={person.picture.large} alt={"A portrait of " + person.name.first}/>
              <h3>
                  {person.name.first} {person.name.last}
              </h3>
          </div>
          <div className={"person-card-right"}>
              {person.wage && <p>Wage: £{person.wage}</p>}
              {onHire && <button onClick={(event) => {
                  event.stopPropagation()
                  onHire(person.id.value)
              }}>Hire</button>}
              {onEdit && <button onClick={(event) => {
                  event.stopPropagation()
                  onEdit(id)
              }
              }>Edit</button>}
          </div>
    </li>
  )
}

PeopleListItem.propTypes = {
    id: PropTypes.number.isRequired,
    person: personShape.isRequired,
    onClick: PropTypes.func.isRequired,
    onHire: PropTypes.func,
    onEdit: PropTypes.func,
}

export default PeopleListItem
