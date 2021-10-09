import './carousel.css';
import img1 from '../../../assets/img/carousels/carousel1.png';
import img2 from '../../../assets/img/carousels/carousel2.png';
import img3 from '../../../assets/img/carousels/carousel3.png';
//external components
import { Carousel } from 'react-responsive-carousel';  //https://www.npmjs.com/package/react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const DemoCarousel = () => {
  return (
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000} showArrows={false} showStatus={false}>
          <div>
              <img src={img1} />
          </div>
          <div>
              <img src={img2} />
          </div>
          <div>
              <img src={img3} />
          </div>
      </Carousel>
    
  );
}

export default DemoCarousel;
