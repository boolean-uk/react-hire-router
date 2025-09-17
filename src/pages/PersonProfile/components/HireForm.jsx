import {useNavigate} from "react-router-dom";

function HireForm(props) {
    const navigate = useNavigate();
    const {onHire} = props;

    function handleSubmit(event) {
        event.preventDefault();
        onHire();
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Hire</button>
        </form>
    )
}

export default HireForm
