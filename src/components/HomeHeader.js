import React from "react";
import ReactDOM from "react-dom";
//import {Link} from "react-router-dom";
import image from "../assets/images/Home-Hero-Image.jpg";
import decoration from "../assets/icons/Decoration.svg";
import {Link} from "react-scroll";
import LoginNav from "./LoginNav";
import HeaderNav from "./HeaderNav";

function HomeHeader (){

    return(
        <div className="first">
            <img src={image} className="headerImg"/>
            <div className="header">
                <LoginNav/>
                <HeaderNav />
            
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