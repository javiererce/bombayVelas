/* eslint-disable no-unused-vars */
import react from "react";
import "./Header.css";
import cualquierCosa from "./logo.png";

const Header = () => {
    return <div className ="header">
             <h1>Bombay Velas</h1>
             <img src={cualquierCosa} alt="./logo bombay" className="logo"/>
           </div>
}

export default Header;
