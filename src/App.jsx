import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Welcome from './Welcome';
import Dashboard from './pages/Dashboard';

import './App.css'
import PeopleListItem from './pages/Dashboard/components/PeopleListItem';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const url = "https://randomuser.me/api/?results=50";

  const [data, setData] = useState(
{
  "results": [
    {
      "gender": "dummy",
      "name": {
        "title": "Mr",
        "first": "dummy",
        "last": "dummy"
      },
      "location": {
        "street": {
          "number": 9517,
          "name": "dummy"
        },
        "city": "Metz",
        "state": "Val-de-Marne",
        "country": "France",
        "postcode": 42532,
        "coordinates": {
          "latitude": "-17.9662",
          "longitude": "-7.7481"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "aubin.vidal@example.com",
      "login": {
        "uuid": "1f0fa7e5-e105-4439-a02f-8f435ab6da3f",
        "username": "bluewolf605",
        "password": "852456",
        "salt": "3eatqnJB",
        "md5": "3a42cfda2bad15ffa038b868798cae42",
        "sha1": "1f0ccd6361482aaa71d4f84ef0bb789d0dbd3f75",
        "sha256": "7ced59ce154ccb82f13029a061b47d25d8b5e1adc17d93baf49c52963de36f4f"
      },
      "dob": {
        "date": "2000-02-03T05:48:35.088Z",
        "age": 25
      },
      "registered": {
        "date": "2007-06-14T11:32:17.699Z",
        "age": 18
      },
      "phone": "02-67-38-62-90",
      "cell": "06-91-99-10-18",
      "id": {
        "name": "INSEE",
        "value": "11000189830416 71"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/23.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
      },
      "nat": "FR"
    }],
  "info": {
    "seed": "89fa9bb642a78e21",
    "results": 2,
    "page": 1,
    "version": "1.4"
  }
});

const [hired, setHired] = useState([]);

/*   const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); */

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

/*   useEffect(() => {
    const filtered = data.filter((launch) =>
      launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]); */


  return (
    <>
    <div className="container">
      <h1>User  Dashboard (V3)</h1>

      <div className="container-nav-main">
        <nav className="sidebar">
            <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
      </div>
        </nav>
        <main className="main">

          <Routes>
            <Route path="/" element={<Dashboard data={data} hired={hired}  />} />

            <Route path="/view/:id" element={<PeopleListItem data={data.results} hired={hired} setHired={setHired}/>}/>
          </Routes>
        </main>
      </div>
    </div>
    </>
  )
}
