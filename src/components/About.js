import React from "react";
import ReactDOM from "react-dom";
import people from "../assets/images/People.jpg";
import decoration from "../assets/icons/Decoration.svg";
import signature from "../assets/icons/Signature.svg";


function About () {
    return(
        <div className="aboutAs">
            <div className="aboutText">
                <h1>O nas</h1>
                <img src={decoration}></img>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature}></img>


            </div>
            <img src = {people} className="people"></img>
            

        </div>
    )
}
export default About;