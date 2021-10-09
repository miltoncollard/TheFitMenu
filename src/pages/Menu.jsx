//internal components
import ProductDetailContainer from '../components/main/Viandas/Detail/ProductDetailContainer/ProductDetailContainer';
import { useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation()
    return ( 
        <section className="viandas section">
            <ProductDetailContainer plates={location.state.plates}/>
        </section>
    );
  }
  
  export default Menu;