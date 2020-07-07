import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";


function LoginHeader (){
    return(
    
    <ul className="headerNav">
        
            <li><Link to="/login">Zaloguj</Link></li>
       
            <li> <Link to="/register">Załóż konto</Link></li>  
       
    </ul>
    )
}
export default LoginHeader;