import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

//components
import NavBar from '../components/header/NavBar/NavBar';
import DemoCarousel from '../components/header/Carousel/carousel';
import About from '../components/main/About/About';
import Banner from '../components/main/Banner/Banner';
import Viandas from '../components/main/Viandas/Viandas';
import Menu from '../pages/Menu';
import Cart from '../components/main/Cart/cart';
import NuestrosClientes from '../components/main/NuestrosClientes/NuestrosClientes';
import NuestrasViandas from '../pages/NuestrasViandas';
import ComoHacerPedido from "../pages/ComoHacerPedido";
import QuienesSomos from "../pages/QuienesSomos";
import Contacto from '../pages/Contacto';
import ServicioCatering from '../components/main/ServicioCatering/ServicioCatering';
import Construccion from '../components/building/building';
import Error404 from '../components/Error/error404';
import Footer from  '../components/footer/footer';
import { CartContextProvider } from '../context/cartContext';

export default function AppRouter(){
    return(
        <BrowserRouter>
            <CartContextProvider>
                <NavBar/>
                <Switch>
                    <Route exact path="/nuestrasviandas" component={NuestrasViandas}/> 
                    <Route exact path="/menu/:productID" component={Menu}/>
                    <Route exact path="/comohacermipedido" component={ComoHacerPedido}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route path="/novedades" component={Construccion}/>
                    <Route path="/quienessomos" component={QuienesSomos}/>
                    <Route path="/contacto" component={Contacto}/>
                    <Route exact path="/">
                        <DemoCarousel/>
                        <About/>
                        <Banner/>
                        <Viandas/>
                        <NuestrosClientes/>
                        <ServicioCatering/>
                    </Route>
                    <Route path="*" component={Error404}/>
                </Switch>
                <Footer/>
            </CartContextProvider>
        </BrowserRouter>
    )
}