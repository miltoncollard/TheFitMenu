import logo from '../../assets/img/logo.png';
//css
import './footer.css';
//external components
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer__logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer__info">
                <p>THE FIT MENU 2021.</p>
                <p>DELIVERY DE VIANDAS. ENTREGAS EN ZONA NORTE Y CABA.</p>
                <p>TODOS LOS DERECHOS RESERVADOS.</p>
            </div>
            <div className="footer__rsociales">
                <a href=""><FontAwesomeIcon icon={faInstagram} size="3x"/></a>
                <a href=""><FontAwesomeIcon icon={faFacebook} size="3x"/></a>
                <a href=""><FontAwesomeIcon icon={faWhatsapp} size="3x"/></a>
                <a href=""><FontAwesomeIcon icon={faEnvelope} size="3x"/></a>
            </div>
        </div>
    );
  }
  
  export default Footer;