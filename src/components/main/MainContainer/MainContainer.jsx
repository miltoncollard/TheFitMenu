//css
import './MainContainer.css';
//assets
import Banner1 from '../../../assets/img/maincontainer/banner_1.jpg';

const MainContainer = () => {
    return ( 
        <div className="main banner container">
            <img src={Banner1} alt="" className="main__banner"/>
        </div>

    );
  }
  
  export default MainContainer;