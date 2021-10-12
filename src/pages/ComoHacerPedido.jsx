import React from "react";

//internal components
import titleComoHacerPedido from '../components/main/Titles/titleComoHacerPedido';
import Preguntas from '../components/main/Questions/questions';

const ComoHacerPedido = () => {

    return ( 
        <section className="pedidos section">
            <div className="pedidos__intro">
                TITULO
                <titleComoHacerPedido/>
            </div>
            <div className="pedidos__container">
                <Preguntas/>
            </div>
        </section>
    )
  }
  
  export default ComoHacerPedido;