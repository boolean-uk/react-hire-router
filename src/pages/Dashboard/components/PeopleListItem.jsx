import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function PeopleListItem({ person }) {
	const navigate = useNavigate();

	const goToPersonProfile = () => {
		navigate(`/view/${person.login.uuid}`);
	};

	return (
		<>
			<li>
				<h3>
					{person.name.first} {person.name.last}
				</h3>
				{person.wage && <p>Wage: £{person.wage}</p>}
			</li>
			<button onClick={goToPersonProfile}>
				{person.wage ? "Edit" : "View Person"}
			</button>
		</>
	);
}

export default PeopleListItem;

PeopleListItem.propTypes = {
	person: PropTypes.object,
};
