import React, { useEffect } from 'react'
import '../../stylesheets/sections/contacts.css';
import GitHubPicture from '../../images/contacts/github.png'
import LinkedInPicture from '../../images/contacts/linkedin.png'
import FacebookPicture from '../../images/contacts/fb.png'

const Contact = () => {

	// useEffect(() => {
	// 	let buttons = document.querySelectorAll("#contact .container .contact-dark .wrapper div .grid-container .grid-item button")

	// 	buttons.forEach(button => {
	// 		// console.log(button)
	// 		button.addEventListener("click", () => {
	// 			console.log(button.value)
	// 			navigator.clipboard.writeText(button.value);
	// 			button.querySelectorAll("#contact .container .contact-dark .wrapper div .grid-container .grid-item button span").forEach(span => {
	// 				span.classList.toggle("visible");
	// 				span.classList.toggle("invisible");
	// 				setTimeout(() => {
	// 					span.classList.toggle("visible");
	// 					span.classList.toggle("invisible");
	// 				}, 1500);
	// 			});
	// 		});
	// 	});

	// })

  return (
	  <section id="contact" className="hidden">
		  <div className="container">
			  <div className="contact-light">
				  <div>
					  <p className="topic-title hidden">Contact me:</p>
				  </div>
				  <div>
					  <div className="grid-container">
						  <div className="grid-item">
							  <div className="contact-img">
								  <img src={GitHubPicture} alt="GitHub Profile"/>
							  </div>
							  <div className="contact-body">
								  <p className="alt-body-title">Github</p>
								  <a href="https://github.com/Pilner" className="button-light" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Github</a>
							  </div>
						  </div>
						  <div className="grid-item">
							  <div className="contact-img">
								  <img src={LinkedInPicture} alt="LinkedIn Profile"/>
							  </div>
							  <div className="contact-body">
								  <p className="alt-body-title">LinkedIn</p>
								  <a href="https://www.linkedin.com/in/pilner/" className="button-light" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
							  </div>
						  </div>
						  <div className="grid-item">
							  <div className="contact-img">
								  <img src={FacebookPicture} alt="Facebook Profile"/>
							  </div>
							  <div className="contact-body">
								  <p className="alt-body-title">Facebook</p>
								  <a href="https://facebook.com/hahahalatado" className="button-light" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
			  <div className="contact-dark">
				  <div className="wrapper">
					  <div>
						  <p className="alt-topic-title">You can also reach out by:</p>
					  </div>
					  <div>
						  <div className="grid-container">
							  <div className="grid-item">
								  <div className="contact-body">
									  <p className="body-title">Email</p>
									  <button id="emailButton" className="button-dark tooltip" data-tooltip="Click to Copy!" value="raileyvictuelles@gmail.com"><span className="visible"><i className="fa-solid fa-envelope"></i> raileyvictuelles@gmail.com</span><span className="invisible">Copied</span></button>
								  </div>
							  </div>
							  <div className="grid-item">
								  <div className="contact-body">
									  <p className="body-title">Phone</p>
									  <button id="phoneButton" className="button-dark tooltip" data-tooltip="Click to Copy!" value="(+63)950-249-0986"><span className="visible"><i className="fa-solid fa-square-phone"></i> (+63)950-249-0986</span><span className="invisible">Copied</span></button>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
	  </section>
  )
}

// CLIPBOARD COPY
// CLIPBOARD COPY


export default Contact