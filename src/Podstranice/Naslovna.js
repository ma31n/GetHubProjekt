import '../App.css';
import { Link } from 'react-router-dom';
function Naslovna() {
  return (
    <div className="Naslovna">
        <h1 align="center">A WIDE VARIETY OF PROJECTS FOR 3 PROGRAMMING LANGUAGES</h1>
        <Link to="/js" className="linkovi"><div className="glavni"><p className="glavnitext">Javascript</p></div></Link>
        <Link to="/python" className="linkovi"><div className="glavni"><p className="glavnitext">Python</p></div></Link>
        <Link to="/java" className="linkovi"><div className="glavni"><p className="glavnitext">Java</p></div></Link>
    </div>
  );
}

export default Naslovna;