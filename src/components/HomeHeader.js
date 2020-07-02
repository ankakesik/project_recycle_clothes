import React from "react";
import ReactDOM from "react-dom";
//import {Link} from "react-router-dom";
import image from "../assets/images/Home-Hero-Image.jpg";
import decoration from "../assets/icons/Decoration.svg";
import {Link} from "react-scroll";

function HomeHeader (){

    return(
        <div className="first">
            <img src={image} className="headerImg"/>
            <div className="header">
                <ul className="headerNav">
                    <Link to="/login">
                        <li>Zaloguj</li>
                    </Link>
                    <Link to="/register">
                        <li>Załóż konto</li>  
                    </Link>
            
                </ul>
                <ul className="headerNav">
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li><Link to="help" smooth={true} duration={1000}>Fundacje i organizacje</Link></li>
                    <li>Kontakt</li>
                </ul>
                
                <h1>Zacznij pomagać! <br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} className="decoration"></img>
                <div className="boxes"> 
                    
                    
                    <div className="box">ODDAJ RZECZY</div>
                    <div className="box">ZORGANIZUJ ZBIÓRKĘ</div>
                </div>

            </div>
            
        </div>

    )
}
export default HomeHeader;