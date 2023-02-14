import { Link } from "react-router-dom";

function PeopleListItem(props) {
	const { person } = props;

	return (
		<li>
			<h3>
				{person.name.first
					? `${person.name.first} ${person.name.last}`
					: person.name}
			</h3>
			{person.wage && <p>Wage: £{person.wage}</p>}
			<Link to={`/view/${person.login.uuid}`} state={{ person }}>
				View Profile
			</Link>
		</li>
	);
}

export default PeopleListItem;
