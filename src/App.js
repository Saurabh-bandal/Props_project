import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Navbar";
import Product from '../src/Product'; 
import CardSection1 from './Components/CardSection1';
import Amazing from './Components/Amazing';
import Order from './Components/Order';
import Customer from './Components/Customer';
import Download from './Components/Download';
import Footer from './Components/Footer';
import Right from './Components/Right';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Product />  
      <CardSection1 />
      <Amazing/>
      <Order/>
      <Customer/>
      <Download/>
      <Footer/>
      <Right/>
    </div>
  );
}

export default App;
