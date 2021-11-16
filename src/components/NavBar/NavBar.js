/* eslint-disable react/jsx-no-undef */

import "./NavBar.css";
import React from 'react';
import CartWidget from "../CartWidget.js/CartWidget";


const NavBar = () => {
    return(    
       
        <header>
          <nav>
             <ul>
              <li><a href="./index.html">Inicio</a></li>
              <li><a href="./nosotros.html">Nosotros</a></li>
              <li><a href="./productos.html">Productos</a></li>
              <li><a href="./contactos.html">Contacto</a></li> 
            </ul>  
            <div className="cart"><a href="./productos"><CartWidget /></a> </div> 

          </nav>
          

          
        </header>            
      
    );
   
};

export default NavBar;