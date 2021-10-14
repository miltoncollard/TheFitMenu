import React from "react";

//internal components
import TitleQuienesSomos from '../components/main/Titles/titleComoHacerPedido';
import About from '../components/main/About/About';
const QuienesSomos = () => {

    return ( 
        <section className="quienessomos section">
            <div className="quienessomos__container">
                <About/>
            </div>
        </section>
    )
  }
  
  export default QuienesSomos;