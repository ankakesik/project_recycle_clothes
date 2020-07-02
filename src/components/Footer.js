import React from "react";
import ReactDOM from "react-dom";
import fb from "../assets/icons/Facebook.svg";
import instagram from "../assets/icons/Instagram.svg";

function Footer () {
    return(
        <div className="footer">
            <h1>Copyright by Coders Lab</h1>
            <div className="socialmedia">
                <img src={fb}></img>
                <img src={instagram}></img>

            </div>

        </div>
    )
}
export default Footer;