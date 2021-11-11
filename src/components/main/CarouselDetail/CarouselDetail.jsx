import './CarouselDetail.css';

//assets
// .... imagenes clasica
import clasica1 from '../../../assets/img/products/clasicas/clasica1.jpg';
import clasica2 from '../../../assets/img/products/clasicas/clasica2.jpg';
import clasica3 from '../../../assets/img/products/clasicas/clasica3.jpg';
import clasica4 from '../../../assets/img/products/clasicas/clasica4.jpg';
import clasica5 from '../../../assets/img/products/clasicas/clasica5.jpg';
import clasica6 from '../../../assets/img/products/clasicas/clasica6.jpg';
// .... imagenes proteico
import proteico1 from '../../../assets/img/products/proteicas/proteica1.jpg'
import proteico2 from '../../../assets/img/products/proteicas/proteica2.jpg'
import proteico3 from '../../../assets/img/products/proteicas/proteica3.jpg'
import proteico4 from '../../../assets/img/products/proteicas/proteica4.jpg'
import proteico5 from '../../../assets/img/products/proteicas/proteica5.jpg'
import proteico6 from '../../../assets/img/products/proteicas/proteica6.jpg'
// .... imagenes light
import light1 from '../../../assets/img/products/light/light1.jpg'
import light2 from '../../../assets/img/products/light/light2.jpg'
import light3 from '../../../assets/img/products/light/light3.jpg'
import light4 from '../../../assets/img/products/light/light4.jpg'
import light5 from '../../../assets/img/products/light/light5.jpg'
import light6 from '../../../assets/img/products/light/light6.jpg'
// .... imagenes veggie
import veggie1 from '../../../assets/img/products/veggie/veggie1.jpg'
import veggie2 from '../../../assets/img/products/veggie/veggie2.jpg'
import veggie3 from '../../../assets/img/products/veggie/veggie3.jpg'
import veggie4 from '../../../assets/img/products/veggie/veggie4.jpg'
import veggie5 from '../../../assets/img/products/veggie/veggie5.jpg'
import veggie6 from '../../../assets/img/products/veggie/veggie6.jpg'

//external components
import { Carousel } from 'react-responsive-carousel';  //https://www.npmjs.com/package/react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const CarouselDetail = (type) => {

    let imagen1,imagen2,imagen3,imagen4,imagen5,imagen6
    let tipo = JSON.stringify(type.type)
    tipo = tipo.replace(/["]/g, '')
    const selectImagen = () =>{

        if(tipo === "Clásica"){
            imagen1 = clasica1
            imagen2 = clasica2
            imagen3 = clasica3
            imagen4 = clasica4
            imagen5 = clasica5
            imagen6 = clasica6
        }else{
            if(tipo === 'Protéico'){
                imagen1 = proteico1
                imagen2 = proteico2
                imagen3 = proteico3
                imagen4 = proteico4
                imagen5 = proteico5
                imagen6 = proteico6
            }else{
                if(tipo === 'Veggie'){
                    imagen1 = veggie1
                    imagen2 = veggie2
                    imagen3 = veggie3
                    imagen4 = veggie4
                    imagen5 = veggie5
                    imagen6 = veggie6
                }else{
                    if(tipo === 'Light'){
                        imagen1 = light1
                        imagen2 = light2
                        imagen3 = light3
                        imagen4 = light4
                        imagen5 = light5
                        imagen6 = light6
                    }
                }
            }
        }

        return imagen1,imagen2,imagen3,imagen4,imagen5,imagen6
    }

    selectImagen()

  return (
      
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000} showArrows={false} showStatus={false}>
          <div>
              <img src={imagen1} />
          </div>
          <div>
              <img src={imagen2} />
          </div>
          <div>
              <img src={imagen3} />
          </div>
          <div>
              <img src={imagen4} />
          </div>
          <div>
              <img src={imagen5} />
          </div>
          <div>
              <img src={imagen6} />
          </div>
      </Carousel>
    
  );
}

export default CarouselDetail;
