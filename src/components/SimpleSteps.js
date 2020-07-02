import React from "react";
import ReactDOM from "react-dom";
import decoration from "../assets/icons/Decoration.svg";
import iconShirt from "../assets/icons/Icon-1.svg";
import iconBag from "../assets/icons/Icon-2.svg";
import iconGlass from "../assets/icons/Icon-3.svg";
import iconTrans from "../assets/icons/Icon-4.svg";


function SimpleSteps () {
    return(
        <div className="steps">
            <h1>Wystarczą 4 proste kroki</h1>
            <img src={decoration}></img>
            <div className="stepIcons">
                <div>
                    <img src={iconShirt}></img>
                    <h2>Wybierz rzeczy</h2>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div>
                    <img src={iconBag}></img>
                    <h2>Spakuj je</h2>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div>
                    <img src={iconGlass}></img>
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div>
                    <img src={iconTrans}></img>
                    <h2>Zamów kuriera</h2>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>

            </div>
            <div className="give">ODDAJ RZECZY</div>

        </div>
    )
}
export default SimpleSteps;