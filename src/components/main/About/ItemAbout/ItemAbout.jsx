import owner1 from '../../../../assets/img/about/vicky.jpg'
import owner2 from '../../../../assets/img/about/gregorio.jpg'

import './ItemAbout.css';

const ItemAbout = () => {
    return ( 
        <div className="owner__container">
            <div className="owner__content">
                <div className='owner__img'><img src={owner1} alt="" /></div>
                <div className='owner__text'>
                <h3>Directora de Marketing</h3>
                <p>Marketinera millenial, amante de la música y el buen comer. Creadora y emprendedora
                    de corazón. Desarrollo el área comercial y de atención al cliente de este bello negocio.
                </p>
                </div>
            </div>
            <div className="owner__content">
                <div className='owner__img'><img src={owner2} alt="" /></div>
                <div className='owner__text'>
                    <h3>Chef Ejecutivo</h3>
                    <p>Cocinero, fan de KISS y diseñador de pedales para guitarra y bajo. Padre de 3
                        niños que me hacen feliz y amante de la gastronomia.
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default ItemAbout;