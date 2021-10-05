//CSS
import './NuestrasViandas.css'
//internal components
import ListProductsComplete from '../components/main/Viandas/ListProductsComplete/ListProductsComplete';

const NuestrasViandas = () => {
    return ( 
        <section className="viandas section">
            <div className="viandas__intro">
                <h2>NUESTRAS VIANDAS</h2>
            </div>
            <ListProductsComplete></ListProductsComplete>
        </section>
    );
  }
  
  export default NuestrasViandas;