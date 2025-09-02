
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        </header>
        </>
    )
}

export default Home
