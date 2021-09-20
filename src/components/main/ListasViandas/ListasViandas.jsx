//css
import './ListasViandas.css';
//internal components
import ItemProducto from './ItemProducto/ItemProducto';

const ListasViandas = () => {
    return ( 
        <section className="viandas section">
            <div className="viandas__intro">
                <h2>NUESTRAS VIANDAS</h2>
                <p>Elegí de nuestra selección de platos saludables</p>
            </div>
            <ItemProducto></ItemProducto>
        </section>
    );
  }
  
  export default ListasViandas;