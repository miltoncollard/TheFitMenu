import owner1 from '../../../../assets/img/carousels/avatar.png'
import owner2 from '../../../../assets/img/carousels/avatar.png'
import './ItemAbout.css';

const ItemAbout = () => {
    return ( 
        <div className="owner__container">
            <div className="owner__content">
                <img src={owner1} alt="" />
                <h3>Directora de Marketing</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi assumenda ex ab repellendus eaque dolore inventore odio sed</p>
            </div>
            <div className="owner__content">
                <img src={owner2} alt="" />
                <h3>Chef Ejecutivo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi assumenda ex ab repellendus eaque dolore inventore odio sed</p>
            </div>
        </div>
    );
  }
  
  export default ItemAbout;