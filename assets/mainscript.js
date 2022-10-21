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


// PARALLAX.JS
var scene = [document.getElementById("hero-scene")];

scene.forEach((item) => {
	new Parallax(item);
});

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
