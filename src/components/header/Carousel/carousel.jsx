import './carousel.css';
import image from '../../../assets/img/carousels/carousel2.jpg'
//external components


const Carousel = () => {
  return (
    <div className="header__carousel">
      <div className="carousel__img">
        <img src={image} alt="" />
      </div>
      <div className="carousel__text">
          <h1>LA FORMA MÁS</h1>
          <h1>FACIL DE COMER</h1>
          <h1>SALUDABLE</h1>
      </div>
    </div>
    
  );
}

export default Carousel;
