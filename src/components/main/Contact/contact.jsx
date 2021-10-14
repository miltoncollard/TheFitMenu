import './contact.css';


const Contact = () => {
    return ( 
        <div>
            <div className="contact__container">
                <form id="form-content">
                    <div className="form__input">
                        <input type="text" placeholder="NOMBRE" class="contact__form__text" id="form-nombre" />
                        <input type="text" placeholder="APELLIDO" class="contact__form__text" id="form-apellido" />
                        <input type="text" placeholder="TELEFONO" class="contact__form__text" id="form-telefono" />
                        <input type="text" placeholder="MAIL" class="contact__form__text" id="form-email" />
                    </div>
                    <textarea placeholder="MENSAJE" class="contact__form__textarea" id="form-message"></textarea>
                </form>
                <div>
                    <button>ENVIAR</button>
                </div>
            </div>
        </div>
    );
  }
  
  export default Contact;