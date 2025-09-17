import PeopleList from './components/PeopleList'

function Dashboard(props) {
    const {hiredPeople, randomPeople} = props;

    return (
        <main className="dashboard-layout">
            <section>
                <h2>People</h2>
                <PeopleList people={randomPeople} canEdit={false}/>
            </section>
            <section>
                <h2>Hired People</h2>
                <PeopleList people={hiredPeople} canEdit={true}/>
            </section>
        </main>
    )
}

export default Dashboard
