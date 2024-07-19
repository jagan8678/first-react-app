
import Menu from './components/menu';
import About from './components/about';
import Footer from './components/footer';
import { Route,Routes } from "react-router-dom";
import Home from './components/home';
import VehicleList from './components/vehiclelist';
import Serviceslist from'./components/servicelist';

function App() {
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicle-list" element={<VehicleList/>}/>
      <Route path="/Services" element={<Serviceslist/>}/>

    </Routes>
    <Footer/>
    </>
  )
}
export default App;
