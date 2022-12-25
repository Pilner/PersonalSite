import React, { Fragment } from 'react';
import Preloader from './components/semantics/Preloader'
import Navbar from './components/semantics/Navbar'
import Hero from './components/sections/Hero'
import Works from './components/sections/Works'
import Introduction from './components/sections/Introduction'
import Tools from './components/sections/Tools'
import Contacts from './components/sections/Contacts'
import Footer from './components/semantics/Footer'

function App() {
  return (
    <Fragment>
      <Preloader />
      <Navbar />
      <Hero />
      <Works />
      <Introduction />
      <Tools />
      <Contacts />
      <Footer />
    </Fragment>
  );
}

// CLIPBOARD COPY
let button = document.querySelectorAll("#contact .container .contact-dark .wrapper div .grid-container .grid-item button").forEach(button => {
  button.addEventListener("click", () => {
    navigator.clipboard.writeText(button.value);
    button.querySelectorAll("#contact .container .contact-dark .wrapper div .grid-container .grid-item button span").forEach(span => {
      span.classList.toggle("visible");
      span.classList.toggle("invisible");
      setTimeout((event) => {
        span.classList.toggle("visible");
        span.classList.toggle("invisible");
      }, 1500);
    });
  });
});
// CLIPBOARD COPY

// SCROLL ANIMATION
// Make new observer that checks if content is on screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("hidden")) {
        entry.target.classList.add("show");
      } else if (entry.target.classList.contains("hidden-slide")) {
        entry.target.classList.add("show-slide");
      }
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
const hiddenElementsSlide = document.querySelectorAll(".hidden-slide");
hiddenElementsSlide.forEach((el) => observer.observe(el));
// SCROLL ANIMATION


export default App;
