var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});


var mdmButton = document.querySelector("#mdm-website");

// mdmButton.addEventListener("click", () => {
// 	alert("There is no website yet, but you can go and check at my github!");
// })

let button = document.querySelectorAll(".alt-contacts-grid button").forEach(button => {
	button.addEventListener("click", () => {
		navigator.clipboard.writeText(button.name);
		button.querySelectorAll(".alt-contacts-grid button span").forEach(span => {
			span.classList.toggle("visible");
			span.classList.toggle("invisible");
			setTimeout((event) => {
				span.classList.toggle("visible");
				span.classList.toggle("invisible");
			}, 1500);
		});
	});
});
