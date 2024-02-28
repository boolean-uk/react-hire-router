import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;
  //console.log("PeopleListItem peron, ", person);

  return (
    <>
      <h3>
        <Link to={`/view/${person.login.uuid}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </>
  );
}

PeopleListItem.propTypes = {
  person: PropTypes.object,
};

export default PeopleListItem;
