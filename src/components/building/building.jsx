import './building.css';
import imgBuilding from '../../assets/img/building.jpg';

const onBuilding = () => {
    return ( 
        <section className="building section">
            <div className="building__container">
                <img src={imgBuilding} alt="en contruccion" />
            </div>
        </section>
    );
}
  
export default onBuilding;
