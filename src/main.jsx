import React from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromChildren,
	createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/PersonProfile";

const dashboardLoader = async ({ params }) =>
	fetch("https://randomuser.me/api/?results=50")
		.then((res) => res.json())
		.then((res) => res.results);

export const addHiredPerson = (data) => {
	hiredPeople.push(data);
};

//NOTE: this stuff should be separated into multiple files yeah
const hiredPeople = [];
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route
				index
				element={<Dashboard hiredPeople={hiredPeople} />}
				loader={dashboardLoader}
				action={() => console.log("dashAction")}
			/>
			<Route
				index
				path="/view/:id"
				Component={() => <Profile />}
				action={async ({ params, request }) => {
					console.log("profileAction");
				}}
			/>
		</Route>
	)
);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
