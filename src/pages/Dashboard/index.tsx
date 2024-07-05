import PeopleList from './components/PeopleList'

function Dashboard(props: any) {
    const { hiredPeople } = props

    return (
        <main className='dashboard-layout'>
            <section>
                <h2>People</h2>
                <PeopleList people={props.people} />
            </section>
            <section>
                <h2>Hired People</h2>
                <PeopleList people={hiredPeople} />
            </section>
        </main>
    )
}

export default Dashboard
