import logo from '../../../assets/img/logo.png'
import './NavBar.css';
import {Link, NavLink} from 'react-router-dom';
//external components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return ( 
    <nav className="nav container">
        <a href="/">
            <img className="nav__logo" src={logo} alt="" />
        </a>
        <div className="nav__menu">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/nuestrasviandas" className="link"><a href="" className="nav__link">NUESTRAS VIANDAS</a></Link>
                </li>
                <li className="nav__item">
                    <Link to="/nuestrasviandas" className="link"><a href="" className="nav__link">HACÉ TU PEDIDO<FontAwesomeIcon icon={faChevronDown} /></a></Link>
                    <ul className="subnav__list">
                        <li className="subnav__item">
                            <Link to ="/comohacermipedido" className="link"><a href="" className="subnav__link">¿CÓMO HACER MI PEDIDO?</a></Link>
                        </li>
                    </ul>
                </li>
                <li className="nav__item">
                    <Link to="/novedades" className="link"><a href="" className="nav__link">NOVEDADES</a></Link>
                </li>
                <li className="nav__item">
                    <Link to="/quienessomos" className="link"><a href="" className="nav__link">QUIÉNES SOMOS</a></Link>
                </li>
                <li className="nav__item">
                    <Link to="/contacto" className="link"><a href="" className="nav__link">CONTACTO</a></Link>
                </li>
            </ul>
        </div>
        <div className="nav__icons">
        <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
        </div>
    </nav>
  );
}

export default NavBar;