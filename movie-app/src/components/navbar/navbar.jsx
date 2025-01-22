import './navbar.css'
import { Link } from 'react-router-dom';


function Card() {

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Home</Link>
      </div>
    </nav>
  )
}

export default Card
