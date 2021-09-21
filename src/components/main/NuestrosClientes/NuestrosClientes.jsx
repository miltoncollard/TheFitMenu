import './NuestrosClientes.css';
import ItemComentarios from './ItemComentarios/ItemComentarios';

const NuestrosClientes = () => {
    return ( 
        <section className="clientes section">
            <div className="clientes__intro">
                <h2>LO QUE DICEN NUESTROS CLIENTES</h2>
            </div>
            <ItemComentarios></ItemComentarios>
        </section>
    );
  }
  
export default NuestrosClientes;