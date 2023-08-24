  import PeopleList from "./components/PeopleList"
  import HireForm from "../PersonProfile/components/HireForm";
import PersonProfile from "../PersonProfile";

  function Dashboard(props) {
    
    const { people, hiredPeople, setHiredPeople } = props

    return (
      <main className="dashboard-layout">
        <section>
          <h2>People</h2>
          <PeopleList people={people} />
        </section>
        <section>
          <h2>Hired People</h2>
          <PeopleList people={hiredPeople} />
        </section>
        <HireForm people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
      </main>
    )
  }

  export default Dashboard
