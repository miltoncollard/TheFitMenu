//css
import './Viandas.css';
//internal components
import ListProductsSimple from './ListProductsSimple/ListProductsSimple';

const Viandas = () => {
    return ( 
        <section className="viandas section">
            <div className="viandas__intro">
                <h2>NUESTRAS VIANDAS</h2>
                <p>Elegí de nuestra selección de platos saludables</p>
            </div>
            <ListProductsSimple></ListProductsSimple>
        </section>
    );
  }
  
  export default Viandas;