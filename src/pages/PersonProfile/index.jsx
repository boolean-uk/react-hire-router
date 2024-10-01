/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import HireForm from './components/HireForm';
import { useParams } from 'react-router-dom';

function PersonProfile(props) {
	const [person, setPerson] = useState(null);
	const { people, setHiredPeople } = props;
	const { id } = useParams();

	useEffect(() => {
		if (people && id) {
			const matchingPerson = people.find((p) => p.login.uuid === id);

			if (matchingPerson) {
				setPerson(matchingPerson);
			}
		}
	}, [people, id]);

	if (!person) return <p>Loading...</p>;

	return (
		<article>
			<h2>
				{person.name.first} {person.name.last}
			</h2>
			<HireForm person={person} setHiredPeople={setHiredPeople} />
		</article>
	);
}

export default PersonProfile;