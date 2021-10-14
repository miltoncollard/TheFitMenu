import React from "react";

//internal components
import TitleContacto from '../components/main/Titles/titleContacto';
import Contact from '../components/main/Contact/contact';
const Contacto = () => {

    return ( 
        <section className="contacto section">
            <div className="contacto__intro">
                <TitleContacto/>
            </div>
            <div className="contacto__container">
                <Contact/>
            </div>
        </section>
    )
  }
  
  export default Contacto;