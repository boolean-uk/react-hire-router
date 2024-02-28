import PropTypes from "prop-types";
import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  //console.log("props in PeopleList; ", props);
  const { people } = props;
  //console.log("people in PeopleList: ", people);
  return (
    <ul>
      {people.map((person, index) => (
        <li key={index} style={{ "list-style": "none" }}>
          <PeopleListItem key={index} person={person} />
        </li>
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  people: PropTypes.array,
};
export default PeopleList;

/**
 * <ul>
          {peopleList.map((person, index) => (
            <li key={index}>
              
              <Link to={`/view/${person.login.uuid}`}></Link>
            </li>
          ))}
        </ul>
 */
