
import './App.css';

//components

import NavBar from './components/header/NavBar/NavBar';
import Carousel from './components/header/Carousel/carousel';
import About from './components/main/About/About';
import MainContainer from './components/main/MainContainer/MainContainer';
import ListasViandas from './components/main/ListasViandas/ListasViandas';
import NuestrosClientes from './components/main/NuestrosClientes/NuestrosClientes';
import ServicioCatering from './components/main/ServicioCatering/ServicioCatering';
import Footer from  './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
        <Carousel></Carousel>
      </header>
      <main>
        <About></About>
        <MainContainer></MainContainer>
        <ListasViandas></ListasViandas>
        <NuestrosClientes></NuestrosClientes>
        <ServicioCatering></ServicioCatering>

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
