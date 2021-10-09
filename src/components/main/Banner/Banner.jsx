import { Parallax } from 'react-parallax'; //https://www.npmjs.com/package/react-parallax
//css
import './Banner.css';
//assets
import Banner1 from '../../../assets/img/maincontainer/banner_1.png';

const Banner = () => {
    return ( 
        <Parallax blur={0} bgImage={Banner1} bgImageAlt="the cat" strength={200}>
            <div style={{ height: '500px' }} />
        </Parallax>
    );
  }
  
  export default Banner;