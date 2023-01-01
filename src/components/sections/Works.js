import React, { useEffect } from 'react'
import '../../stylesheets/sections/works.css';

const Works = () => {
	useEffect(() => {
		//URL
		const githubLink = "https://api.github.com/users/Pilner/repos";
		// const errorLink = "https://httpstat.us/404";

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
			data = data.sort(function (a, b) { return new Date(b.updated_at) - new Date(a.updated_at) });

			// Easily change the needed keys of the HTML Snippet
			function template(key, iteration) {
				return (`
		<p className="updatedText">
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

	})
  return (
	<section id="works" className="hidden">
		<div className="spacer-1"></div>
		<div>
			<p className="alt-topic-title topic-position hidden-slide">Some of my latest works</p>
			<div className="container">
				<div className="grid-container">
					<div className="grid-item">
	
						<div className="hidden">
							<div className="works-text">
								<div className="body-title project-name">
									<p className="skeleton skeleton-text"></p>
								</div>
								<ul className="body-text project-text">
									<p className="skeleton skeleton-text"></p>
									<p className="skeleton skeleton-text"></p>
								</ul>
							</div>
							<div className="works-link">
								<a className="button-dark-full project-link" href="/" target="_blank" rel="noopener noreferrer">View Project</a>
							</div>
						</div>
						<div className="hidden">
							<div className="works-text">
								<div className="body-title project-name">
									<p className="skeleton skeleton-text"></p>
								</div>
								<ul className="body-text project-text">
									<p className="skeleton skeleton-text"></p>
									<p className="skeleton skeleton-text"></p>
								</ul>
							</div>
							<div className="works-link">
								<a className="button-dark-full project-link" href="/" target="_blank" rel="noopener noreferrer">View Project</a>
							</div>
						</div>
						<div className="hidden">
							<div className="works-text">
								<div className="body-title project-name">
									<p className="skeleton skeleton-text"></p>
								</div>
								<ul className="body-text project-text">
									<p className="skeleton skeleton-text"></p>
									<p className="skeleton skeleton-text"></p>
								</ul>
							</div>
							<div className="works-link">
								<a className="button-dark-full project-link" href="/" target="_blank" rel="noopener noreferrer">View Project</a>
							</div>
						</div>
						<div className="hidden">
							<div className="works-text">
								<div className="body-title project-name">
									<p className="skeleton skeleton-text"></p>
								</div>
								<ul className="body-text project-text">
									<p className="skeleton skeleton-text"></p>
									<p className="skeleton skeleton-text"></p>
								</ul>
							</div>
							<div className="works-link">
								<a className="button-dark-full project-link" href="/" target="_blank" rel="noopener noreferrer">View Project</a>
							</div>
						</div>
	
					</div>
					<div className="grid-item">
						<p className="body-title">Coming Soon!</p>
					</div>
				</div>
				<div className="works-buttons">
						<a href="https://github.com/Pilner" className="button-light" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github pe-2"></i> View More on Github
						</a>
				</div>
			</div>
		</div>
		<div className="spacer-2"></div>
	</section>
  )
}


export default Works