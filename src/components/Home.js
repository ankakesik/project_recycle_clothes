import React from "react";
import ReactDOM from "react-dom";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns"
import SimpleSteps from "./SimpleSteps";
import About from "./About";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";

function Home () {
    return(
        <div className ="home">
            <HomeHeader />
            <HomeThreeColumns />
            <SimpleSteps />
            <About />
            <WhoWeHelp />
            <Contact />
            <Footer />

        </div>
    )
}
export default Home;