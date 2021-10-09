import './About.css';
import ItemAbout from './ItemAbout/ItemAbout';

const About = () => {
    return ( 
        <section className="about section">
            <div className="about__intro">
                <h2>¿QUIÉNES SOMOS?</h2>
                <p>En Abril de 2016 comenzamos con este emprendimiento de viandas. 
                   Nuestra misión es ayudar a las personas a que puedan comer más saludable, 
                   sin dejar de comer rico y casero. Nuestras viandas organizan y 
                   simplifican tu vida para que puedas ocuparte de las cosas más importantes</p>
            </div>
            <ItemAbout></ItemAbout>
        </section>
    );
  }
  
  export default About;