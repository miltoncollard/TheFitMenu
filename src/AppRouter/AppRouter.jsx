import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

//components
import NavBar from '../components/header/NavBar/NavBar';
import Carousel from '../components/header/Carousel/carousel';
import About from '../components/main/About/About';
import Banner from '../components/main/Banner/Banner';
import Viandas from '../components/main/Viandas/Viandas';
import Menu from '../pages/Menu';
import NuestrosClientes from '../components/main/NuestrosClientes/NuestrosClientes';
import NuestrasViandas from '../pages/NuestrasViandas';
import ServicioCatering from '../components/main/ServicioCatering/ServicioCatering';
import Construccion from '../components/building/building';
import Error404 from '../components/Error/error404';
import Footer from  '../components/footer/footer';

export default function AppRouter(){
    return(
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/nuestrasviandas">
                    <NuestrasViandas></NuestrasViandas>
                </Route>
                <Route exact path="/menu">
                    <Menu></Menu>
                </Route>
                <Route path="/comohacermipedido">
                    <Construccion></Construccion>
                </Route>
                <Route path="/novedades">
                    <Construccion></Construccion>
                </Route>
                <Route path="/quienessomos">
                    <Construccion></Construccion>
                </Route>
                <Route path="/contacto">
                    <Construccion></Construccion>
                </Route>
                <Route exact path="/">
                    <Carousel/>
                    <About/>
                    <Banner/>
                    <Viandas/>
                    <NuestrosClientes/>
                    <ServicioCatering/>
                </Route>
                <Route path="*">
                    <Error404></Error404>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}