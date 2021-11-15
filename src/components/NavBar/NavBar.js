
import { Icon } from 'semantic-ui-react'
import "./NavBar.css";
import React from 'react';


const NavBar = () => {
    
    return(    
       
        <header>
          <nav>
             <ul>
              <li><a href="./index.html">Inicio</a></li>
              <li><a href="./nosotros.html">Nosotros</a></li>
              <li><a href="./productos.html">Productos</a></li>
              <li><a href="./contactos.html">Contacto</a></li>   
              <li><a href="./productos.html"><Icon link name='shop' className="shop"/></a></li>
            </ul>  
          </nav>
          
        </header>            
      
    );
};

export default NavBar;