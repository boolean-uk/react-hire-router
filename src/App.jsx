import "./App.css";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
