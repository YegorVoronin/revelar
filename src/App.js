import './App.css'
import Navbar from './components/navbar.js'
import Home from './components/landingpages/home.js'
import Services from './components/landingpages/services.js'
import Products from './components/landingpages/products.js'
import About from './components/landingpages/about.js'
import Contact from './components/landingpages/contact.js'
import { Route, Link } from "react-router-dom";
import Footer from './components/footer.js'
import ReactDom from 'react-dom'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Route exact path='/' component ={Home}></Route>
      <Route exact path='/Services' component ={Services}></Route>
      <Route exact path='/Products' component ={Products}></Route>
      <Route exact path='/About' component ={About}></Route>
      <Route exact path='/Contact' component ={Contact}></Route>
      <Footer></Footer>

    </div>
  );
}

export default App;
