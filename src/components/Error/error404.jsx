import './error404.css';
import imgError from '../../assets/img/error404.png';

const Error404 = () => {
    return ( 
        <section className="error section">
            <div className="error404__container">
                <img src={imgError} alt="error vader" />
            </div>
        </section>
    );
}
  
export default Error404;
