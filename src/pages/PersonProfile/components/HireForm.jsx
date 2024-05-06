import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { addHiredPerson } from "../../../main";

function HireForm({ onSubmit }) {
	const handleFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(Object.fromEntries([...new FormData(e.target).entries()]));
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<label htmlFor="wage">Wage Offer</label>
			<input
				type="number"
				id="wage"
				name="wage"
				defaultValue={0}
				onFocus={(e) => (e.target.value = "")}
			/>
			<button type="submit">Hire</button>
		</form>
	);
}

export default HireForm;
