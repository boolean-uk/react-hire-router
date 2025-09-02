import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation