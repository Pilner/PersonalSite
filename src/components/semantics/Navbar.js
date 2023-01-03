import React, {useEffect, useRef} from 'react'
import '../../stylesheets/semantics/navbar.css';


const Navbar = () => {

  const ref = useRef([]);

  useEffect(() => {
    const menuChanger = new IntersectionObserver((sections) => {

      sections.forEach((section) => {
        if (section.isIntersecting) {
          if (section.target.id === "hero-page") {
            document.querySelector("#navbar-menu").classList.add("hidden-menu");
            document.querySelector("#navbar-menu").classList.remove("show-menu");
          } else {
            document.querySelector("#navbar-menu").classList.add("show-menu");
            document.querySelector("#navbar-menu").classList.remove("hidden-menu");
          }
        }
      })
    }, {threshold: [.4]});

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      menuChanger.observe(section);
      // console.log(section);
    });

  })

  return (
    <nav id="navbar">
      <div id="navbar-menu" className="hidden-menu">
        <a href="#hero-page" id="hero-menu" className="nav-button-main-light">
          <i className="fa-solid fa-bars"></i>
        </a>
        <a href="#works" id="works-menu" className="nav-button-main-light">
          <i className="fa-solid fa-diagram-project"></i>
        </a>
        <a href="#introduction" id="intro-menu" className="nav-button-main-light">
          <i className="fa-solid fa-user"></i>
        </a>
        <a href="#tools" id="tools-menu" className="nav-button-main-light">
          <i className="fa-solid fa-terminal"></i>
        </a>
        <a href="#contact" id="contact-menu" className="nav-button-main-light">
          <i className="fa-solid fa-address-book"></i>
        </a>

        <div id="navbar-percent"></div>
      </div>
    </nav>
  )
}

// NAVBAR


function currentScrollPercentage() {
  let pos = Math.round(
    (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
  );

  let contactMenu = document.querySelector("#contact-menu"),
    toolsMenu = document.querySelector("#tools-menu"),
    introMenu = document.querySelector("#intro-menu"),
    worksMenu = document.querySelector("#works-menu"),
    heroMenu = document.querySelector("#hero-menu");

  if (pos >= 90) {
    contactMenu.classList.add("navbar-active");
    toolsMenu.classList.remove("navbar-active");
    introMenu.classList.remove("navbar-active");
    worksMenu.classList.remove("navbar-active");
    heroMenu.classList.remove("navbar-active");
  } else if (pos >= 65) {
    contactMenu.classList.remove("navbar-active");
    toolsMenu.classList.add("navbar-active");
    introMenu.classList.remove("navbar-active");
    worksMenu.classList.remove("navbar-active");
    heroMenu.classList.remove("navbar-active");
  } else if (pos >= 40) {
    contactMenu.classList.remove("navbar-active");
    toolsMenu.classList.remove("navbar-active");
    introMenu.classList.add("navbar-active");
    worksMenu.classList.remove("navbar-active");
    heroMenu.classList.remove("navbar-active");
  } else if (pos >= 15) {
    contactMenu.classList.remove("navbar-active");
    toolsMenu.classList.remove("navbar-active");
    introMenu.classList.remove("navbar-active");
    worksMenu.classList.add("navbar-active");
    heroMenu.classList.remove("navbar-active");
  } else {
    contactMenu.classList.remove("navbar-active");
    toolsMenu.classList.remove("navbar-active");
    introMenu.classList.remove("navbar-active");
    worksMenu.classList.remove("navbar-active");
    heroMenu.classList.add("navbar-active");
  }
  return (pos);
}

window.addEventListener("scroll", () => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    document.getElementById("navbar-percent").style.width = `${currentScrollPercentage() * .9}%`;

  } else {

    document.getElementById("navbar-percent").style.height = `${currentScrollPercentage() * .9}%`;
  }

})
// NAVBAR


export default Navbar
