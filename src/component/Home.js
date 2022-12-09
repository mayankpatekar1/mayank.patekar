import React from "react";
import heroImage from "../images/hero-image.jpg";

export default function Home(){
    return (
        <div className="home-container">
        <div className="home-text">
        <h2 className="home-hi">Hiii,</h2>
        <h2 className="home-my">I am </h2><h1>Mayank Patekar. </h1>
        <p className="home-p">Web developer , Studing B.Sc IT...</p>
        </div>
        <div className="home-img-container">
            <img className="home-img" src={heroImage} alt="hero" />
        </div>
        
        </div>
    );
}