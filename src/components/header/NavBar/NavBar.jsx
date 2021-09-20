import logo from '../../../assets/img/logo.png'
import './NavBar.css';
//external components
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return ( 
    <nav className="nav container">
        <img className="nav__logo" src={logo} alt="" />
        <div className="nav__menu">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#Menu1" className="nav__link">NUESTRAS VIANDAS</a>
                </li>
                <li className="nav__item">
                    <a href="#Menu2" className="nav__link">HACÉ TU PEDIDO</a>
                </li>
                <li className="nav__item">
                    <a href="#Menu3" className="nav__link">NOVEDADES</a>
                </li>
                <li className="nav__item">
                    <a href="#Menu3" className="nav__link">QUIÉNES SOMOS</a>
                </li>
                <li className="nav__item">
                    <a href="#Menu3" className="nav__link">CONTACTO</a>
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