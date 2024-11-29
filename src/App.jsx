import { useState } from "react";
import {
  Link,
  Route,
  Routes,
  // useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  const navigate = useNavigate();

  useState(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      });
  }, []);

  const makeHire = (e, person, wage) => {
    e.preventDefault();
    console.log("person passed: ", person);
    console.log("wage passed: ", wage);
    person.wage = wage;
    console.log("person now: ", person);
    setHiredPeople([...hiredPeople, person]);
    // setPeople([...people.filter((x) => x.id !== person.id)]);
    navigate("/");
  };

  const editHire = (e, person, wage) => {
    e.preventDefault();

    const newHiredList = hiredPeople.map((x) => {
      if (x.id === person.id) {
        x.wage = wage;
        return x;
      } else {
        return x;
      }
    });

    console.log(newHiredList);
    // setHiredPeople([...newHiredList]);
    navigate("/");
  };

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard hiredPeople={hiredPeople} people={people}>
              /
            </Dashboard>
          }
        />
        <Route
          path="view/:id"
          element={
            <PersonProfile people={people} makeHire={makeHire}>
              /
            </PersonProfile>
          }
        />
        <Route
          path="edit/:id"
          element={
            <PersonProfile people={people} makeEdit={editHire}>
              /
            </PersonProfile>
          }
        />
      </Routes>
    </>
  );
}
