// REQUEST
//URL
const githubLink = "https://api.github.com/users/Pilner/repos",
  errorLink = "https://httpstat.us/404";

let githubRepos;

// Makes a function that fetches and returns the promise
async function githubData() {
  try {
    // Makes a Promise to fetch api
    let response = await fetch(githubLink);
    if (response.ok) {
      // Makes a Promise to get data from API
      let data = await response.json();
      return data;
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.error(err);
  }
}


githubRepos = githubData();

githubRepos.then((data) => {
  let card = document.querySelectorAll(".works-text"),
    cardTitle = document.querySelectorAll(".project-name"),
    cardDesc = document.querySelectorAll(".project-text"),
    cardLink = document.querySelectorAll(".project-link");

  // Sorting by Updated Date - Descending
  data = data.sort(function (a, b) {return new Date(b.updated_at) - new Date(a.updated_at)});

  // Easily change the needed keys of the HTML Snippet
  function template(key, iteration) {
    return (`
		<p class="updatedText">
			${data[iteration][key]}
		</p>
		`);
  }

  // Loop over the four latest repositories to insert to HTML
  for (let i = 0; i < 4; i++) {
    cardTitle[i].innerHTML = template("name", i);
    cardDesc[i].innerHTML = template("description", i);
    cardLink[i].href = data[i].html_url;

    // Change the background of the cards from their language
    switch (data[i].language) {
      case "HTML":
        card[i].classList.add("html-bg");
        break;
      case "CSS":
        card[i].classList.add("css-bg");
        break;
      case "JavaScript":
        card[i].classList.add("js-bg");
        break;
      case "C":
        card[i].classList.add("c-bg");
        break;
      case "C++":
        card[i].classList.add("cpp-bg");
        break;
      case "EJS":
        card[i].classList.add("ejs-bg");
        break;
      case "Lua":
        card[i].classList.add("lua-bg");
        break;
      case "Vim Script":
        card[i].classList.add("vim-bg");
        break;
      default:
        card[i].classList.add("pilner-bg");
        break
    }
  }
}).catch((err) => {
  console.error(err);
});
// REQUEST

// NAVBAR
const menuChanger = new IntersectionObserver((sections) => {

  let navButton = document.querySelector("#navbar > button");

  sections.forEach((section) => {
    if (section.isIntersecting) {
      if (section.target.id == "hero-page") {
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
sections.forEach((section) => menuChanger.observe(section));


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

// SCROLL ANIMATION
// Make new observer that checks if content is on screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
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

// PRELOADER
const preloader = document.querySelector("#preloader");
window.addEventListener("load", () => {
  preloader.style.opacity = "0";
  document.body.style.overflow = "auto";
  setTimeout(() => {
    preloader.style.display = "none"
  }, 2000);
})
// PRELOADER

// PARALLAX.JS
var scene = [document.getElementById("hero-scene"), document.getElementById("intro-pic-scene")];

scene.forEach((item) => new Parallax(item));
// PARALLAX.JS

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

// BIRTHDAY
let today = new Date(),
  bday = new Date("March 20, 2003"),
  age = today.getFullYear() - bday.getFullYear();

document.getElementById("age").textContent = age;
// BIRTHDAY
