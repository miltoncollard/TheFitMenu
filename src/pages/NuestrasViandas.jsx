//CSS
import './NuestrasViandas.css'
//internal components
import ListProductsAPI from '../components/main/Viandas/ListProductsAPI/ListProductsAPI';

const NuestrasViandas = () => {
    return ( 
        <section className="viandas section">
            <div className="viandas__intro">
                <h2>NUESTRAS VIANDAS</h2>
            </div>
            <ListProductsAPI></ListProductsAPI>
        </section>
    );
  }
  
  export default NuestrasViandas;