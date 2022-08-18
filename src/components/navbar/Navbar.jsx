import React from "react";
import {AiTwotoneShopping, AiFillMedicineBox, AiOutlineUser } from "react-icons/ai";
import { IoFastFoodSharp} from "react-icons/io5";
import {SiFastapi} from "react-icons/si";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
          <div className="navbar-logo">
            <span class="square1" />
            <span class="square2" />
            <h1 className="logo">¡YUM!</h1>
          </div>
          <div className="navbar-links_container">
            <div className="card"><p><a href="#turbo"><SiFastapi/>Turbo</a></p></div>
            <div className="card"><p><a href="#restaurantes"><IoFastFoodSharp/>Restaurantes</a></p></div>
            <div className="card"><p><a href="#supermercados"><AiTwotoneShopping/>Supermercados</a></p></div>
            <div className="card"><p><a href="#farmacias"><AiFillMedicineBox/>Farmacias</a></p></div>
          </div>
          <div className="navbar-user">
          <div className="navbar-user_logo"><AiOutlineUser/></div>
          <div className="navbar-user_registro"><p><a href="user">Registrarse</a></p></div></div>

      </div>
    </div>
  );
};

export default Navbar;
