import React from "react";
import ReactDOM from "react-dom";
import decoration from "../assets/icons/Decoration.svg"
import Page from "./Page"

function WhoWeHelp () {
    

    return(
        <>
        <Page />
        <div className="help">
            <h1>Komu pomagamy?</h1>
            <img src={decoration}></img>
            <div className="organization">
                <h2>Fundacjom</h2>
                <h2>Organizacjom pozarządowym</h2>
                <h2>Lokalnym zbiórkom</h2>
            
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
        </>
        
    )
}
export default WhoWeHelp;