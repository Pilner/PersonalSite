import React from 'react'
import '../../stylesheets/sections/introduction.css';
import SelfPicture from '../../images/self-pictures/introduction-pic2.jpg';
import IntroBG from '../../images/background/intro-pic-bg.svg'


const Introduction = () => {

	return (
		<section id="introduction" className="hidden">
			<p className="topic-title topic-position hidden-slide">Enough about that. Introduce Yourself!</p>
			<div className="container">
				<div className="grid-container">
					<div className="grid-item">
						<p className="body-text hidden">Hi! My name is Fabian Railey Victuelles! A {age} year-old programmer based in the Philippines.</p>
						<p className="body-text hidden">I am a second-year student from the Polytechnic University of the Philippines studying BS Computer Science.</p>
						<p className="body-text hidden">I am a programmer that can code on languages like Java, JavaScript, C, and C++. I can also do Full-Stack as a Web Developer with the <span className="tooltip" data-tooltip="(MongoDB, Express.js, Node.js)">M-E-N</span> stack. I am what they call an enthusiastic coder who focuses on what needed to be fixed and developed with no loose threads attached.</p>
						<p className="body-text hidden">I like coding.</p>
					</div>
					<div className="grid-item hidden">
						<div id="intro-pic-scene">
							<img id="intro-pic" data-depth="0.15" src={SelfPicture} alt="" />
							<img id="intro-pic-bg" src={IntroBG} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

// BIRTHDAY
let today = new Date(),
	bday = new Date("March 20, 2003"),
	age = today.getFullYear() - bday.getFullYear();

export default Introduction