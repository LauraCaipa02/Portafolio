import { Link } from 'react-router-dom';
import '../header/Header.css';
import Logo from './Group 7.svg';

function Header(){  
    return(
        <header>
        <nav className='Navbar'>
            <div className="Navbar__logo">
                <img src={Logo} alt="" />
            </div>
            <input type='checkbox' id='Navbar__check'></input>
            <label for='Navbar__check' className='Navbar__btn'><i class="fa-solid fa-ellipsis-vertical"></i></label>
            <ul className='Navbar__menu'>
                <li className='nav__item'><Link to="/" className='item'>Home</Link></li>
                <li className='nav__item'><Link to="/aboutme" className='item'>About me </Link></li>
                <li className='nav__item'><Link to="/studies" className='item'>Studies</Link></li>
                <li className='nav__item'><Link to="/skills" className='item'>Skills</Link></li>
                <li className='nav__item'><Link to="/jobs" className='item'>Jobs</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header;