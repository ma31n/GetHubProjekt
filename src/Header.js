import './App.css';
import { Link } from 'react-router-dom';
import Logo from "./gethub3.png";

function Header() {
  return (
    <div className="Header">
        <Link to="/"><img src={Logo}></img></Link>
        <h2 style={{color: "black"}}>Where the world steals software!</h2>
        <h3><Link to="/" className="linkovi">Home</Link></h3><h3><Link to="/aboutus" className="linkovi">About us</Link></h3><h3><Link to="/create" className="linkovi">Create</Link></h3><h3><Link to="/forum" className="linkovi">Forum</Link></h3><h3><Link to="/users" className="linkovi">Users</Link></h3>
        
    </div>
  );
}

export default Header;
