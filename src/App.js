import React from "react";
import { Footer, Blog, Carrusel, Top_Restaurantes, Header } from "./containers";
import {Categorias, Navbar } from "./components";
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
        <Navbar />
      </div>
      <Categorias/>
      <Carrusel/>
      <Top_Restaurantes/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default App;
