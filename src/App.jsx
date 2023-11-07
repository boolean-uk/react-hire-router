import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/index.jsx';
import PersonProfile from './pages/PersonProfile';

function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([{
    "gender": "male",
    "name": {
        "title": "Mr",
        "first": "Lauri",
        "last": "Murto"
    },
    "location": {
        "street": {
            "number": 4753,
            "name": "Nordenskiöldinkatu"
        },
        "city": "Taipalsaari",
        "state": "Åland",
        "country": "Finland",
        "postcode": 76205,
        "coordinates": {
            "latitude": "-26.5392",
            "longitude": "-7.3199"
        },
        "timezone": {
            "offset": "-3:00",
            "description": "Brazil, Buenos Aires, Georgetown"
        }
    },
    "email": "lauri.murto@example.com",
    "login": {
        "uuid": "79577dfb-4e2e-43eb-82b8-6751f90c2f70",
        "username": "sadleopard474",
        "password": "bulldog1",
        "salt": "r5j3o4UV",
        "md5": "bb75ac74f2e253f066ecbae5983c4d1c",
        "sha1": "d4b4cc51c99d446429c2412b87b083ef41e5605d",
        "sha256": "20c16f12275aa85775347c791b0c532af472bc584d3bab852f69966ad8885413"
    },
    "dob": {
        "date": "1969-09-02T16:45:13.159Z",
        "age": 54
    },
    "registered": {
        "date": "2009-01-20T11:13:50.820Z",
        "age": 14
    },
    "phone": "09-507-194",
    "cell": "040-858-43-63",
    "id": {
        "name": "HETU",
        "value": "NaNNA187undefined"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/8.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/8.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/8.jpg"
    },
    "nat": "FI",
    "wage": "10"
}])
  const navigate = useNavigate()

  // Fetch people data: 
  async function getPeople() {
    const response = await fetch('https://randomuser.me/api/?results=50')
    //console.log(response)
    const json = await response.json()
    //console.log(json.results)
    console.log("Getting People:", json.results)
    setPeople(json.results)
    }

  // useEffect to fetch data: 
  useEffect( () => {
    console.log("useEffect running for people")
    getPeople()
    }, []) 

  console.log("the list @ home:", people)

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li onClick={() =>  navigate('/')}>  Home  </li>
            <li><Link to={'/dashboard'}  >Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/dashboard' element={
          <Dashboard
          people={people}
          hiredPeople={hiredPeople}
          />}/>
        <Route path='/people/:id' element={
          <PersonProfile
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
          />}/>
      </Routes>

    </>
  )
}

export default App