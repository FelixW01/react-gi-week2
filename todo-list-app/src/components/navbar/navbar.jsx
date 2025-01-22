import './navbar.css'
import { Link } from 'react-router-dom';


function Card() {

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Home</Link>
      </div>
      <ul className="navbar-links">
          <li><Link to="/taskdetail" className="navbar-link">Task Detail</Link></li>
          <li><Link to="/tasklist" className="navbar-link">Task List</Link></li>
      </ul>
    </nav>
  )
}

export default Card
