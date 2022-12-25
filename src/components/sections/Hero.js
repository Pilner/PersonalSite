import React from 'react';
import HeroLogo from '../../images/site-logo/FRV-4LOGO.png';
import '../../stylesheets/sections/hero.css';

const Hero = () => {
  return (
    <section id="hero-page">
      <div className="container">
        <div className="parallax-container" id="hero-scene">
          <div data-depth="0.15">
            <img className="hero-logo" src={HeroLogo} alt="Hero Logo" />
              <p className="hero-title">Hi! I'm Railey</p>
              <p className="hero-text">"A programmer is one that can do things in many ways."</p>
          </div>
        </div>
      </div>

    </section>
  );
}

// PARALLAX.JS
// var scene = [document.getElementById("hero-scene"), document.getElementById("intro-pic-scene")];

// scene.forEach((item) => new Parallax(item));
// PARALLAX.JS


export default Hero