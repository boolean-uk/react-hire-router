import { NavLink } from "react-router-dom";

function PeopleListItem(props) {
	const { person } = props;
	return (
		<li>
			<h3>
				{person.name.first} {person.name.last}
			</h3>
			{person.wage && <p>Wage: £{person.wage}</p>}
			<NavLink
				to={"/view/" + person.name.first}
				state={person}>
				View Profile
			</NavLink>
		</li>
	);
}

export default PeopleListItem;
