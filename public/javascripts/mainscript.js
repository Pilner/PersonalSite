// REQUEST
//URL
const 	githubLink	= "https://api.github.com/users/Pilner/repos",
		errorLink	= "https://httpstat.us/404";

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
	let card		= document.querySelectorAll(".works-text"),
		cardTitle	= document.querySelectorAll(".project-name"),
		cardDesc	= document.querySelectorAll(".project-text"),
		cardLink	= document.querySelectorAll(".project-link");

	// Sorting by Updated Date - Descending
	data = data.sort(function(a, b){return new Date(b.updated_at) - new Date(a.updated_at)});

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
		console.log(data[i].language);
		
		cardTitle[i].innerHTML		= template("name", i);
		cardDesc[i].innerHTML		= template("description", i);
		cardLink[i].href			= data[i].html_url;		

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
			case null:
				card[i].classList.add("pilner-bg");
				break
		}
	}
}).catch((err) => {
	console.log(err);
});

// REQUEST

// CLIPBOARD COPY
let button = document.querySelectorAll(".contact .container .contact-dark .wrapper div .grid-container .grid-item button").forEach(button => {
	button.addEventListener("click", () => {
		navigator.clipboard.writeText(button.name);
		button.querySelectorAll(".contact .container .contact-dark .wrapper div .grid-container .grid-item button span").forEach(span => {
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


// PARALLAX.JS
var scene = [document.getElementById("hero-scene"), document.getElementById("intro-pic-scene")];

scene.forEach((item) => new Parallax(item));

// SCROLL ANIMATION
// -Make new observer that checks if content is on screen
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
	setTimeout(()=>{
		preloader.style.display = "none"
	}, 2000);
})
// PRELOADER
