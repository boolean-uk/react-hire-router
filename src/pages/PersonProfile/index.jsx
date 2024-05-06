import { useState } from "react";
import HireForm from "./components/HireForm";
import { useLocation, useNavigate } from "react-router-dom";
import { addHiredPerson } from "../../main";

function PersonProfile(props) {
	const person = useLocation().state;
	const navigate = useNavigate();
	if (!person) return <p>Loading...</p>;

	const handleFormSubmit = (data) => {
		addHiredPerson({ ...person, ...data });
		navigate("/");
	};

	return (
		<article>
			<h2>
				{person.name.first} {person.name.last}
			</h2>
			<HireForm
				person={person}
				onSubmit={handleFormSubmit}
			/>
		</article>
	);
}

export default PersonProfile;
