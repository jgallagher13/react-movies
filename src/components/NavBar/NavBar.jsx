import { Link } from "react-router-dom"
import "./NavBar.css";
export default function NavBar({ user }) {
    return(
        <nav className="flex-container">
            <Link to="/" className="flex-item">Movies List Page</Link>
            <Link to="/actors" className="flex-item">Actor List Page</Link>
            <p>Welcome, {user}!</p>
        </nav>
    )
}