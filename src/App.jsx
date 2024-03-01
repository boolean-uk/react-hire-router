import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import EditPerson from './pages/EditPerson';
import './App.css'


export default function App() {
  /*declares a state variable named hiredPeople and a function setHiredPeople to update that state. 
  The initial value of hiredPeople is an empty array. You can use setHiredPeople to update the hiredPeople state variable throughout the component.*/ 
  const [hiredPeople, setHiredPeople] = useState([])

  /*This line declares a state variable named people and a function setPeople to update that state. 
  The initial value of people is an empty array, indicating that, there are no people loaded in the dashboard. 
  When the data for people is fetched or loaded, then you can use setPeople to update the people state variable with the fetched data.*/
  const [people, setPeople] = useState([])


  useEffect(() =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then((data) => setPeople(data.results))
    .catch(error => console.error('Error fetching data:', error));

  }, []);

    // Function to hire a person
    const hirePerson = (person) => {
      setHiredPeople([...hiredPeople, person]);
      //you filter out the person which already is in the people list and then update the list
      const updatedList = people.filter(p => p !== person)
      setPeople(updatedList)
    };

    const updateHiredList = (updatedList) => {
      setHiredPeople(updatedList)
    }
  
  return (
    <div className='App'>
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
        <Route path="/"   
        element={<Dashboard people={people} hiredPeople={hiredPeople}/>} 
        />
        <Route path = "/view/:uuid" element={<PersonProfile people={people} hirePerson={hirePerson} />}
         />
         {/*Extension*/}
         <Route path="/edit/:uuid" element={<EditPerson hiredPeople={hiredPeople} updateHiredList={updateHiredList} />} />
      </Routes>
    </div>
  )
}
