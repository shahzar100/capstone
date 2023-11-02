import React, { useState, useEffect } from 'react'

const Nav = () => {
	const [navOpen, setNavOpen] = useState(false)
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Define a function to update the state with the current inner width
		const updateInnerWidth = () => {
			setInnerWidth(window.innerWidth);
		};

		// Add an event listener to the window to listen for the "resize" event
		window.addEventListener('resize', updateInnerWidth);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', updateInnerWidth);
		};
	}, []); // The empty dependency array means this effect runs once after
	return (
		<nav>
			{innerWidth < 700 && <button className='primaryButton'> Menu </button>}
			{((innerWidth <= 700 && navOpen) || (innerWidth > 700)) && <ul>
				<li>
					<a> Home </a>
				</li>
				<li>
					<a> About </a>
				</li>
				<li>
					<a> Menu </a>
				</li>
				<li>
					<a> Reservations </a>
				</li>
				<li>
					<a> Order Online </a> </li>
				<li>
					<a> Login </a>
				</li>
			</ul>}
		</nav>
	)
}

export default Nav