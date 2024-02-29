import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'
import PropTypes from 'prop-types'

Dashboard.propTypes = {
  hiredPeople: PropTypes.array
}

// Fetching
function Fetcher() {
  const url = `https://randomuser.me/api/?results=50`

    return fetch(url)
    .then(res => res.json())
    // .then((data) => {console.log(data.results); setPeople(data.results)});
    .then((data) =>  data.results);
}

function Dashboard(props) {
  const { hiredPeople } = props
  const [people, setPeople] = useState([])

  //Calling random people API:
  useEffect(() => {
    Fetcher()
    .then(data => setPeople(data))

  }, []);
  
  

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        {people && <PeopleList peoples={people} />}
      </section>
      <section>
        <h2>Hired People</h2>
        {hiredPeople && <PeopleList peoples={hiredPeople} />}
      </section>
    </main>
  )
}

export default Dashboard


