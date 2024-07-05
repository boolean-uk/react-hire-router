import PeopleListItem from './PeopleListItem'

function PeopleList(props: any) {
    const { people } = props

    return (
        <ul>
            {people.map((person: any, index: number) => (
                <PeopleListItem key={index} person={person} />
            ))}
        </ul>
    )
}

export default PeopleList
