/* eslint-disable react/prop-types */
import PeopleList from './components/PeopleList'
import { useNavigate } from 'react-router-dom';

export default function Dashboard(props) {
  const { people, hiredPeople, handleHire } = props

  const navigate = useNavigate()

  const handleView = (path) => {
    navigate(`/view/${path}`)
  }

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} handleHire={handleHire} handleView={handleView}/>
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} handleHire={handleHire} handleView={handleView} />
      </section>
    </main>
  )
}
