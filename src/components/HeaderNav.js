import React from "react";
import {Link} from "react-scroll";

export default function HeaderNav (){
    return(
        
    <ul className="headerNav">
        <li>Start</li>
        <li><Link to="steps" smooth={true} duration={1000}>O co chodzi?</Link></li>
        <li><Link to="aboutAs" smooth={true} duration={1000}>O nas</Link></li>
        <li><Link to="help" smooth={true} duration={1000}>Fundacje i organizacje</Link></li>
        <li><Link to="contactForm" smooth={true} duration={1000}>Kontakt</Link></li>
    </ul>
      
  )
}