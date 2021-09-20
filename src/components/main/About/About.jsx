import './About.css';
import ItemAbout from './ItemAbout/ItemAbout';

const About = () => {
    return ( 
        <section className="about section">
            <div className="about__intro">
                <h2>¿QUIÉNES SOMOS?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio mollitia asperiores magnam debitis? Vero cupiditate modi voluptates earum fuga maxime dicta dolore, inventore libero blanditiis laudantium, officia maiores, perferendis tempora.</p>
            </div>
            <ItemAbout></ItemAbout>
        </section>
    );
  }
  
  export default About;