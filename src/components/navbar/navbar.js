import './navbar.css';
import Logo from '../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
        <div className='logo'>
        <Link to="/"><img src={Logo} alt="Logo"/></Link>
        </div>
        </div>
    )
}

export default Navbar;