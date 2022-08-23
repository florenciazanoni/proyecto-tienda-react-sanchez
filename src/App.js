import React from "react";
import { Footer, Blog, Carrusel, Restaurantes, Header } from "./containers";
import { Categorias, Navbar, ItemListContainer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
        <Navbar />
      </div>
      <ItemListContainer/>
      <Categorias />
      <Carrusel />
      <Restaurantes />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
