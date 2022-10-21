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


