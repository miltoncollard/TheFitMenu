import React from "react";

//internal components
import TitleComoHacerPedido from '../components/main/Titles/titleComoHacerPedido';
import Preguntas from '../components/main/Questions/questions';

const ComoHacerPedido = () => {

    return ( 
        <section className="pedidos section">
            <div className="pedidos__intro">
                <TitleComoHacerPedido/>
            </div>
            <div className="pedidos__container">
                <Preguntas/>
            </div>
        </section>
    )
  }
  
  export default ComoHacerPedido;