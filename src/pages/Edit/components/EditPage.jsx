import { useNavigate } from "react-router-dom"

function EditPage({ hiredPeople, setHiredPeople }) {

    const navigate = useNavigate()
    console.log(hiredPeople)

    // submit function to return to dashboard after new offer made
    function handleSubmit() {
        navigate("/")
    }

    return (
        <div>
            <h2>Make new wage offer</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="wage">Wage Offer</label>
                <input
                    type="text"
                    id="wage"
                    name="wage"
                    // onChange={e => setWage(e.target.value)}
                    // value={wage}
                />
                <button type="submit">Hire</button>
            </form>
        </div>
    )
}

export default EditPage