import React, { useEffect, useRef } from 'react'
import '../../stylesheets/semantics/preloader.css';

const Preloader = () => {
	const ref = useRef(null);

	useEffect(() => {
		const preloader = ref.current;
		window.addEventListener("load", () => {
			preloader.style.opacity = "0";
			document.body.style.overflow = "auto";
			setTimeout(() => {
				preloader.style.display = "none"
			}, 2000);
		});
	})

	return (
		<div id="preloader" ref={ref}></div>
	)
}


export default Preloader