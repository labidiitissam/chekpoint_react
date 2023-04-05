
import './App.css';
import NavBar from './components/NavBar';
import Carousels from './components/carousel/carousels';
import About from './About';
import Cards from './components/Cards';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Carousels className="carousel-top"/>
    <About/>
    <Cards/>
   </div>
  
);
}


export default App;
