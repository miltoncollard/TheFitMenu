import logo from '../../assets/img/logo.png'
import './NavBar.css';
//external components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const NavBar = () => {
  return ( 
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            <nav className="nav container">
                <img className="nav__logo" src={logo} alt="" />
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#Menu1" className="nav__link">Menu1</a>
                        </li>
                        <li className="nav__item">
                            <a href="#Menu2" className="nav__link">Menu2</a>
                        </li>
                        <li className="nav__item">
                            <a href="#Menu3" className="nav__link">Menu3</a>
                        </li>
                    </ul>
                </div>
            </nav>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}

export default NavBar;