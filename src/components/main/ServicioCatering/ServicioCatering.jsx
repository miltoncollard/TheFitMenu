//css
import './ServicioCatering.css';
//assets
import img from '../../../assets/img/catering/catering.png';

const ServicioCatering = () => {
    return ( 
        <div className="catering container">
            <div className="catering__img">
                <img src={img} alt="" />
            </div>
            <div className="catering__info">
                <h2>SERVICIO DE CATERING</h2>
                <p>Realizamos servicio de Catering para eventos sociales y empresariales.</p>
                &nbsp;
                <p>Contamos con distintas modalidades de servicio. Envianos tu consulta para poder armarte un presupuesto acorde. Gracias!</p>
            </div>
        </div>


    );
  }
  
  export default ServicioCatering;