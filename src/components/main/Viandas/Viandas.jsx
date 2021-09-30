//css
import './Viandas.css';
//internal components
import ListProducts from './ListProducts/ListProducts';
import ListProductsAPI from './ListProductsAPI/ListProductsAPI';

const Viandas = () => {
    return ( 
        <section className="viandas section">
            <div className="viandas__intro">
                <h2>NUESTRAS VIANDAS</h2>
                <p>Elegí de nuestra selección de platos saludables</p>
            </div>
            <ListProducts></ListProducts>
        </section>
    );
  }
  
  export default Viandas;